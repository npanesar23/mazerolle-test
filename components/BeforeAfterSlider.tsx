import React, { useState, useRef, useEffect, useCallback } from 'react';
import { MoveHorizontal } from 'lucide-react';

// Prevent double-tap zoom when touching sliders - add once globally
let globalZoomPreventionAdded = false;
function addGlobalZoomPrevention() {
  if (globalZoomPreventionAdded) return;
  globalZoomPreventionAdded = true;
  let lastTouchEnd = 0;
  document.addEventListener('touchend', (e) => {
    const target = e.target as HTMLElement;
    if (target?.closest?.('[data-before-after-slider]')) {
      const now = Date.now();
      if (now - lastTouchEnd < 400) e.preventDefault();
      lastTouchEnd = now;
    }
  }, { passive: false });
  document.addEventListener('touchstart', (e) => {
    if (e.touches.length > 1 && (e.target as HTMLElement)?.closest?.('[data-before-after-slider]')) {
      e.preventDefault();
    }
  }, { passive: false });
}

interface BeforeAfterProps {
  beforeImage: string;
  afterImage: string;
  alt: string;
  beforeImagePosition?: string;
}

const BeforeAfterSlider: React.FC<BeforeAfterProps> = ({ beforeImage, afterImage, alt, beforeImagePosition }) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const [containerWidth, setContainerWidth] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const updateWidth = () => setContainerWidth(el.clientWidth);
    updateWidth();
    const ro = new ResizeObserver(updateWidth);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const handleMove = useCallback((clientX: number) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
      const percentage = Math.max(0, Math.min((x / rect.width) * 100, 100));
      setSliderPosition(percentage);
    }
  }, []);

  useEffect(() => {
    addGlobalZoomPrevention();
  }, []);

  // Native touch listener - must run before React's to prevent zoom (passive: false)
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const preventZoom = (e: Event) => e.preventDefault();
    const onTouchStart = (e: TouchEvent) => {
      e.preventDefault();
      setIsDragging(true);
      handleMove(e.touches[0].clientX);
    };
    const onTouchEnd = (e: TouchEvent) => {
      e.preventDefault();
      setIsDragging(false);
    };
    el.addEventListener('touchstart', onTouchStart, { passive: false, capture: true });
    el.addEventListener('touchend', onTouchEnd, { passive: false, capture: true });
    el.addEventListener('touchcancel', onTouchEnd, { passive: false, capture: true });
    (el as HTMLElement).addEventListener('gesturestart', preventZoom, { passive: false, capture: true });
    (el as HTMLElement).addEventListener('gesturechange', preventZoom, { passive: false, capture: true });
    (el as HTMLElement).addEventListener('gestureend', preventZoom, { passive: false, capture: true });
    return () => {
      el.removeEventListener('touchstart', onTouchStart);
      el.removeEventListener('touchend', onTouchEnd);
      el.removeEventListener('touchcancel', onTouchEnd);
      (el as HTMLElement).removeEventListener('gesturestart', preventZoom);
      (el as HTMLElement).removeEventListener('gesturechange', preventZoom);
      (el as HTMLElement).removeEventListener('gestureend', preventZoom);
    };
  }, [handleMove]);

  const onMouseMove = useCallback((e: MouseEvent) => {
    if (isDragging) handleMove(e.clientX);
  }, [isDragging, handleMove]);

  const onTouchMove = useCallback((e: TouchEvent) => {
    if (isDragging) {
      e.preventDefault();
      handleMove(e.touches[0].clientX);
    }
  }, [isDragging, handleMove]);

  const onMouseUp = useCallback(() => setIsDragging(false), []);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', onMouseMove);
      window.addEventListener('mouseup', onMouseUp);
      window.addEventListener('touchmove', onTouchMove, { passive: false });
      window.addEventListener('touchend', onMouseUp);
    }
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('touchend', onMouseUp);
    };
  }, [isDragging, onMouseMove, onMouseUp, onTouchMove]);

  return (
    <div 
      data-before-after-slider
      className="relative w-full aspect-[4/3] md:aspect-[16/9] overflow-hidden rounded-lg shadow-xl cursor-ew-resize select-none touch-none"
      ref={containerRef}
      onMouseDown={(e) => {
        setIsDragging(true);
        handleMove(e.clientX);
      }}
    >
      {/* After Image (Background) */}
      {afterImage === 'placeholder' ? (
        <div className="absolute top-0 left-0 w-full h-full bg-stone-200 border-2 border-dashed border-stone-400 flex items-center justify-center">
          <span className="text-stone-500 text-lg font-medium">Image here</span>
        </div>
      ) : (
        <div 
          role="img"
          aria-label={`After ${alt}`}
          className="absolute top-0 left-0 w-full h-full bg-cover bg-center touch-none pointer-events-none"
          style={{ backgroundImage: `url(${afterImage})` }}
        />
      )}

      {/* Before Image (Foreground, clipped) */}
      <div 
        className="absolute top-0 left-0 w-full h-full overflow-hidden"
        style={{ width: `${sliderPosition}%` }}
      >
        {beforeImage === 'placeholder' ? (
          <div className="absolute top-0 left-0 w-full h-full bg-stone-200 border-2 border-dashed border-stone-400 flex items-center justify-center" style={{ width: containerWidth || containerRef.current?.clientWidth || '100%' }}>
            <span className="text-stone-500 text-lg font-medium">Image here</span>
          </div>
        ) : (
          <div 
            role="img"
            aria-label={`Before ${alt}`}
            className="absolute top-0 left-0 h-full touch-none pointer-events-none bg-cover"
            style={{ 
              width: containerWidth || containerRef.current?.clientWidth || '100%',
              backgroundImage: `url(${beforeImage})`,
              backgroundPosition: beforeImagePosition || 'center'
            }}
          />
        )}
      </div>

      {/* Slider Handle - touch-none prevents zoom when dragging */}
      <div 
        className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize z-10 shadow-[0_0_10px_rgba(0,0,0,0.5)] touch-none"
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg text-brand-700 touch-none">
           <MoveHorizontal size={20} />
        </div>
      </div>

      {/* Labels */}
      <div className="absolute top-4 left-4 bg-black/50 text-white px-3 py-1 text-sm font-medium rounded-sm backdrop-blur-sm">Before</div>
      <div className="absolute top-4 right-4 bg-brand-700/80 text-white px-3 py-1 text-sm font-medium rounded-sm backdrop-blur-sm">After</div>
    </div>
  );
};

export default BeforeAfterSlider;
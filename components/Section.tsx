import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  bg?: 'white' | 'light' | 'dark' | 'brand';
}

const Section: React.FC<SectionProps> = ({ children, className = '', id, bg = 'white' }) => {
  const bgColors = {
    white: 'bg-white',
    light: 'bg-stone-50',
    dark: 'bg-stone-900 text-white',
    brand: 'bg-brand-700 text-white',
  };

  return (
    <section id={id} className={`py-16 md:py-24 ${bgColors[bg]} ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
};

export default Section;
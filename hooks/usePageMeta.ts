import { useEffect } from 'react';

const BASE_URL = 'https://mazerollebuilders.vercel.app';
const DEFAULT_IMAGE = `${BASE_URL}/hero.jpg`;

function setMeta(nameOrProperty: string, content: string, isProperty = false) {
  const attr = isProperty ? 'property' : 'name';
  let el = document.querySelector(`meta[${attr}="${nameOrProperty}"]`) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, nameOrProperty);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

/**
 * Updates document title and SEO/social meta tags for the current page.
 * Call this in each page component so every route has correct metadata.
 */
export function usePageMeta(
  title: string,
  description: string,
  options?: { image?: string }
) {
  const image = options?.image ? `${BASE_URL}${options.image.startsWith('/') ? '' : '/'}${options.image}` : DEFAULT_IMAGE;
  const fullTitle = title.includes('Mazerolle') ? title : `${title} | Mazerolle Builders Ltd.`;
  const url = typeof window !== 'undefined' ? window.location.href : BASE_URL + '/';

  useEffect(() => {
    document.title = fullTitle;
    setMeta('description', description);
    setMeta('og:title', fullTitle, true);
    setMeta('og:description', description, true);
    setMeta('og:url', url, true);
    setMeta('og:image', image, true);
    setMeta('twitter:title', fullTitle);
    setMeta('twitter:description', description);
    setMeta('twitter:image', image);
  }, [fullTitle, description, url, image]);
}

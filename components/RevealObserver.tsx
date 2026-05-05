'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export function RevealObserver() {
  const pathname = usePathname();

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    function applyAll() {
      document.querySelectorAll('.reveal:not(.is-revealed)').forEach((el) => {
        el.classList.add('is-revealed');
      });
    }

    if (reduce) {
      requestAnimationFrame(applyAll);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -60px 0px' },
    );

    requestAnimationFrame(() => {
      document.querySelectorAll('.reveal:not(.is-revealed)').forEach((el) => {
        observer.observe(el);
      });
    });

    return () => observer.disconnect();
  }, [pathname]);

  return null;
}

"use client";

import { useEffect, useRef } from "react";

export function HeroReveal({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (window.matchMedia("(min-width: 981px)").matches) return;

    const photo = node.querySelector(".hero-frame") ?? node;
    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries.some((entry) => entry.isIntersecting)) return;
        node.classList.add("is-playing");
        observer.disconnect();
      },
      { threshold: 0.4 },
    );

    observer.observe(photo);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="hero-visual" ref={ref}>
      {children}
    </div>
  );
}

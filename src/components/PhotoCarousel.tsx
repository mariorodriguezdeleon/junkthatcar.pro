"use client";

import { useCallback, useEffect, useRef, useState } from "react";

/**
 * PhotoCarousel — client-side side carousel for the JTC homepage.
 *
 * Design notes:
 * - Zero dependencies; ~2KB of JS.
 * - Fixed aspect ratio (4/3) on the frame => zero layout shift (CLS-safe).
 * - Images lazy-loaded except the first; `unoptimized` next/image (static export).
 * - Auto-advances every 5s, pauses on hover/focus and when the tab is hidden.
 * - Dots + prev/next buttons; keyboard operable (arrow keys); respects
 *   prefers-reduced-motion (no auto-advance).
 * - To add photos: drop a file in /public/images/carousel/ and add an entry
 *   to the `photos` array below (alt text required).
 */

const photos = [
  {
    src: "/images/carousel/IMG_4428_web.jpg",
    alt: "Flatbed tow truck hauling a vintage junk pickup on a rural lot",
  },
  {
    src: "/images/carousel/IMG_2294_web.jpg",
    alt: "Green flatbed tow truck parked in the salvage yard",
  },
];

export default function PhotoCarousel() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduced = useRef(false);

  useEffect(() => {
    reduced.current = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
  }, []);

  const next = useCallback(() => setIndex((i) => (i + 1) % photos.length), []);
  const prev = useCallback(
    () => setIndex((i) => (i - 1 + photos.length) % photos.length),
    []
  );

  useEffect(() => {
    if (paused || reduced.current || photos.length < 2) return;
    const id = setInterval(next, 5000);
    const onVis = () => document.hidden && setPaused(true);
    document.addEventListener("visibilitychange", onVis);
    return () => {
      clearInterval(id);
      document.removeEventListener("visibilitychange", onVis);
    };
  }, [paused, next]);

  return (
    <div
      className="relative w-full"
      role="region"
      aria-roledescription="carousel"
      aria-label="Recent pickups"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      onKeyDown={(e) => {
        if (e.key === "ArrowRight") next();
        if (e.key === "ArrowLeft") prev();
      }}
    >
      {/* Fixed 4:3 frame — images object-cover inside, so no CLS */}
      <div className="relative w-full aspect-[4/3] overflow-hidden rounded-2xl border border-jtc-border bg-jtc-tint shadow-lg">
        {photos.map((p, i) => (
          <img
            key={p.src}
            src={p.src}
            alt={p.alt}
            width={1200}
            height={900}
            loading={i === 0 ? "eager" : "lazy"}
            fetchPriority={i === 0 ? "high" : "auto"}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${
              i === index ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>

      {/* Prev / next */}
      {photos.length > 1 && (
        <>
          <button
            type="button"
            onClick={prev}
            aria-label="Previous photo"
            className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-2 text-jtc-charcoal shadow-md hover:bg-white transition-colors"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Next photo"
            className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-2 text-jtc-charcoal shadow-md hover:bg-white transition-colors"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M9 6l6 6-6 6" />
            </svg>
          </button>

          {/* Dots */}
          <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-2">
            {photos.map((p, i) => (
              <button
                key={p.src}
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`Go to photo ${i + 1}`}
                aria-current={i === index}
                className={`h-2.5 rounded-full transition-all ${
                  i === index
                    ? "w-6 bg-brand-500"
                    : "w-2.5 bg-white/80 hover:bg-white"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

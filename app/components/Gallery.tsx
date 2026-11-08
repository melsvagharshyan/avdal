"use client";

import Image, { type StaticImageData } from "next/image";
import { useEffect, useState } from "react";
import counter from "../../public/images/counter.jpg";
import drinks from "../../public/images/drinks.jpg";
import hall from "../../public/images/interior-hall.jpg";
import table from "../../public/images/table.jpg";
import { useLang } from "./LanguageProvider";
import { Reveal, SectionHeading } from "./ui";

const PHOTOS: { src: StaticImageData; alt: number; span: string }[] = [
  { src: hall, alt: 0, span: "md:col-span-2 md:row-span-2" },
  { src: table, alt: 1, span: "" },
  { src: drinks, alt: 2, span: "" },
  { src: counter, alt: 3, span: "md:col-span-2" },
];

export function Gallery() {
  const { t } = useLang();
  const [active, setActive] = useState<number | null>(null);

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
      if (e.key === "ArrowRight") setActive((a) => (a === null ? a : (a + 1) % PHOTOS.length));
      if (e.key === "ArrowLeft") setActive((a) => (a === null ? a : (a - 1 + PHOTOS.length) % PHOTOS.length));
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [active]);

  return (
    <section id="gallery" className="grain relative bg-ink py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading eyebrow={t.gallery.eyebrow} title={t.gallery.title} text={t.gallery.text} />
        </Reveal>

        <div className="mt-16 grid auto-rows-[16rem] grid-cols-1 gap-4 sm:grid-cols-2 md:auto-rows-[14rem] md:grid-cols-4 lg:auto-rows-[16rem]">
          {PHOTOS.map((p, i) => (
            <Reveal key={i} delay={i * 100} className={`${p.span} h-full`}>
              <button
                type="button"
                onClick={() => setActive(i)}
                className="group relative block h-full w-full overflow-hidden rounded-3xl border border-gold/15"
              >
                <Image
                  src={p.src}
                  alt={t.gallery.alts[p.alt]}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  placeholder="blur"
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/0 to-transparent opacity-80 transition group-hover:opacity-100" />
                <span className="absolute bottom-4 left-5 text-left font-display text-lg text-cream/90">
                  {t.gallery.alts[p.alt]}
                </span>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {active !== null && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/95 p-4 backdrop-blur"
          onClick={() => setActive(null)}
        >
          <button
            type="button"
            aria-label="Close"
            className="absolute right-4 top-4 flex h-12 w-12 items-center justify-center rounded-full border border-gold/40 text-2xl text-gold"
            onClick={() => setActive(null)}
          >
            ×
          </button>
          <div className="relative h-[80vh] w-full max-w-4xl" onClick={(e) => e.stopPropagation()}>
            <Image
              src={PHOTOS[active].src}
              alt={t.gallery.alts[PHOTOS[active].alt]}
              fill
              sizes="90vw"
              className="object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
}

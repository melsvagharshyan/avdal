"use client";

import Image from "next/image";
import { CONTACT, DISHES } from "../lib/content";
import { useLang } from "./LanguageProvider";
import { PhoneIcon, Quatrefoil, Reveal, SectionHeading } from "./ui";

export function Menu() {
  const { t } = useLang();
  const mains = DISHES.filter((d) => d.featured);
  const sides = DISHES.filter((d) => !d.featured);

  return (
    <section id="menu" className="grain relative bg-coal py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,rgba(125,30,44,0.25),transparent_60%)]" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading eyebrow={t.menu.eyebrow} title={t.menu.title} text={t.menu.text} />
        </Reveal>

        {/* Mains */}
        <h3 className="mt-16 text-center text-xs font-semibold uppercase tracking-[0.3em] text-cream/50">
          {t.menu.mains}
        </h3>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {mains.map((d, i) => {
            const dish = t.menu.dishes[d.id];
            return (
              <Reveal key={d.id} delay={i * 120}>
                <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-gold/20 bg-gradient-to-b from-char to-ink p-6 transition duration-500 hover:-translate-y-1 hover:border-gold/50 hover:shadow-[0_30px_60px_-30px_rgba(201,164,92,0.45)]">
                  <div className="relative mx-auto aspect-[4/3] w-full overflow-hidden rounded-2xl bg-ink">
                    <Image
                      src={d.image}
                      alt={dish.name}
                      fill
                      sizes="(min-width: 1024px) 320px, (min-width: 640px) 45vw, 90vw"
                      className="object-cover transition duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gold/20" />
                  </div>
                  <div className="mt-6 flex items-start justify-between gap-4">
                    <div>
                      <h4 className="font-display text-2xl text-cream">{dish.name}</h4>
                      {d.id === "khinkali" && (
                        <span className="mt-1 inline-block rounded-full bg-wine/40 px-2.5 py-0.5 text-xs text-gold-light">
                          {t.menu.perPiece}
                        </span>
                      )}
                    </div>
                    <p className="shrink-0 text-right font-display text-2xl text-gold-gradient">
                      {d.price}
                      <span className="ml-1 font-sans text-sm text-gold/80">{t.menu.currency}</span>
                    </p>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-cream/60">{dish.desc}</p>
                </article>
              </Reveal>
            );
          })}
        </div>

        {/* Sides */}
        <h3 className="mt-20 text-center text-xs font-semibold uppercase tracking-[0.3em] text-cream/50">
          {t.menu.sides}
        </h3>
        <Reveal className="mx-auto mt-8 max-w-3xl">
          <ul className="divide-y divide-gold/15 rounded-3xl border border-gold/20 bg-ink/60 px-5 sm:px-8">
            {sides.map((d) => {
              const dish = t.menu.dishes[d.id];
              return (
                <li key={d.id} className="flex items-center gap-4 py-5 sm:gap-6">
                  <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full ring-1 ring-gold/40 sm:h-16 sm:w-16">
                    <Image src={d.image} alt={dish.name} fill sizes="64px" className="object-cover" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-baseline gap-3">
                      <h4 className="font-display text-xl text-cream">{dish.name}</h4>
                      <span className="leader hidden sm:block" />
                      <p className="ml-auto shrink-0 font-display text-xl text-gold-light">
                        {d.price}
                        <span className="ml-1 font-sans text-xs text-gold/80">{t.menu.currency}</span>
                      </p>
                    </div>
                    <p className="mt-1 text-sm text-cream/55">{dish.desc}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </Reveal>

        <p className="mt-6 text-center text-xs text-cream/40">{t.menu.note}</p>

        {/* Delivery CTA */}
        <Reveal className="mt-16">
          <div className="relative overflow-hidden rounded-3xl border border-gold/30 bg-gradient-to-r from-wine-dark via-wine to-wine-dark p-8 sm:p-10">
            <Quatrefoil className="absolute -right-10 -top-10 h-48 w-48 text-gold/10" />
            <div className="relative flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-light/80">
                  {t.visit.deliveryTitle}
                </p>
                <p className="mt-2 max-w-lg font-display text-2xl text-cream sm:text-3xl">
                  {t.visit.deliveryText}
                </p>
              </div>
              <a
                href={CONTACT.phoneHref}
                className="flex shrink-0 items-center gap-3 rounded-full bg-cream px-7 py-4 font-display text-xl text-wine-dark transition hover:bg-gold-light"
              >
                <PhoneIcon className="h-5 w-5" />
                {CONTACT.phoneDisplay}
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

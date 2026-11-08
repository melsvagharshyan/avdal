"use client";

import Image from "next/image";
import counter from "../../public/images/counter.jpg";
import handmade from "../../public/images/dishes/khinkali-handmade.jpg";
import { useLang } from "./LanguageProvider";
import { HandIcon, LeafIcon, Quatrefoil, Reveal, TruckIcon } from "./ui";

const FEATURE_ICONS = [HandIcon, LeafIcon, TruckIcon];

export function About() {
  const { t } = useLang();

  return (
    <section id="about" className="relative overflow-hidden bg-cream py-24 text-ink sm:py-32">
      <Quatrefoil className="pointer-events-none absolute -left-24 top-10 h-96 w-96 text-gold/10" />
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        {/* Images */}
        <Reveal className="relative order-2 lg:order-1">
          <div className="relative mx-auto max-w-lg">
            <div className="relative aspect-[3/4] w-4/5 overflow-hidden rounded-[2rem] shadow-2xl shadow-ink/30">
              <Image
                src={counter}
                alt={t.gallery.alts[3]}
                fill
                sizes="(min-width: 1024px) 400px, 80vw"
                className="object-cover"
                placeholder="blur"
              />
            </div>
            <div className="absolute -bottom-10 right-0 aspect-square w-1/2 overflow-hidden rounded-[2rem] border-8 border-cream shadow-2xl shadow-ink/30">
              <Image
                src={handmade}
                alt={t.about.features[0].text}
                fill
                sizes="(min-width: 1024px) 260px, 45vw"
                className="object-cover"
                placeholder="blur"
              />
            </div>
            <div className="absolute -top-6 right-4 h-24 w-24 overflow-hidden rounded-full shadow-xl ring-4 ring-cream sm:right-10 sm:h-28 sm:w-28">
              <Image src="/images/logo.jpg" alt="Avdal" fill sizes="112px" className="object-cover" />
            </div>
          </div>
        </Reveal>

        {/* Copy */}
        <Reveal className="order-1 lg:order-2" delay={100}>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-wine">{t.about.eyebrow}</p>
          <h2 className="mt-4 font-display text-4xl leading-tight sm:text-5xl">{t.about.title}</h2>
          <div className="divider-gold mt-6 max-w-[12rem] !text-gold-dark">
            <Quatrefoil className="h-5 w-5" />
          </div>
          <p className="mt-8 text-lg leading-relaxed text-char/80">{t.about.p1}</p>
          <p className="mt-5 text-lg leading-relaxed text-char/80">{t.about.p2}</p>

          <ul className="mt-10 grid gap-4 sm:grid-cols-3">
            {t.about.features.map((f, i) => {
              const Icon = FEATURE_ICONS[i];
              return (
                <li key={f.title} className="rounded-2xl border border-gold/30 bg-parchment/60 p-5">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-ink text-gold">
                    <Icon className="h-5 w-5" />
                  </span>
                  <p className="mt-4 font-display text-lg">{f.title}</p>
                  <p className="mt-1 text-sm text-char/70">{f.text}</p>
                </li>
              );
            })}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

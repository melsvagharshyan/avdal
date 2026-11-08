"use client";

import Image from "next/image";
import khinkali from "../../public/images/dishes/khinkali-hero.jpg";
import { CONTACT } from "../lib/content";
import { useLang } from "./LanguageProvider";
import { ClockIcon, PhoneIcon, Quatrefoil, TruckIcon, useIsOpen } from "./ui";

export function Hero() {
  const { t } = useLang();
  const isOpen = useIsOpen();

  return (
    <section id="top" className="grain relative overflow-hidden pt-28 pb-20 sm:pt-36 lg:pb-28">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-40 top-20 h-[32rem] w-[32rem] rounded-full bg-wine/30 blur-[120px]" />
        <div className="absolute -right-20 bottom-0 h-[28rem] w-[28rem] rounded-full bg-gold/15 blur-[120px]" />
      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-[1.05fr_1fr] lg:px-8">
        {/* Copy */}
        <div className="text-center lg:text-left">
          <div className="inline-flex items-center gap-3 rounded-full border border-gold/30 bg-coal/60 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-gold">
            <Quatrefoil className="h-4 w-4" />
            {t.hero.eyebrow}
          </div>

          <h1 className="mt-8 font-display text-5xl leading-[1.05] sm:text-6xl xl:text-7xl">
            <span className="text-cream">{t.hero.title} </span>
            <span className="text-gold-gradient italic">{t.hero.titleAccent}</span>
          </h1>

          <p className="mx-auto mt-7 max-w-xl text-lg leading-relaxed text-cream/70 lg:mx-0">
            {t.hero.text}
          </p>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
            <a
              href="#menu"
              className="w-full rounded-full bg-gold px-8 py-4 text-center font-semibold text-ink shadow-[0_10px_40px_-10px_rgba(201,164,92,0.7)] transition hover:-translate-y-0.5 hover:bg-gold-light sm:w-auto"
            >
              {t.hero.ctaMenu}
            </a>
            <a
              href={CONTACT.phoneHref}
              className="flex w-full items-center justify-center gap-2 rounded-full border border-gold/50 px-8 py-4 font-semibold text-gold-light transition hover:border-gold hover:bg-gold/10 sm:w-auto"
            >
              <PhoneIcon className="h-4 w-4" />
              {t.hero.ctaOrder}
            </a>
          </div>

          <dl className="mt-12 grid grid-cols-3 divide-x divide-gold/15 rounded-2xl border border-gold/15 bg-coal/50 py-5 backdrop-blur-sm">
            <div className="px-3">
              <dt className="flex items-center justify-center gap-1.5 text-[11px] uppercase tracking-widest text-cream/50 lg:justify-start lg:pl-3">
                <ClockIcon className="h-3.5 w-3.5" />
                {t.hero.hours}
              </dt>
              <dd className="mt-2 font-display text-lg text-gold-light lg:pl-3">{CONTACT.hours}</dd>
            </div>
            <div className="px-3">
              <dt className="flex items-center justify-center gap-1.5 text-[11px] uppercase tracking-widest text-cream/50 lg:justify-start lg:pl-3">
                <TruckIcon className="h-3.5 w-3.5" />
                {t.hero.delivery}
              </dt>
              <dd className="mt-2 font-display text-lg text-gold-light lg:pl-3">
                <a href={CONTACT.phoneHref}>{CONTACT.phoneDisplay}</a>
              </dd>
            </div>
            <div className="px-3">
              <dt className="text-[11px] uppercase tracking-widest text-cream/50 lg:pl-3">
                {t.menu.dishes.khinkali.name}
              </dt>
              <dd className="mt-2 font-display text-lg text-gold-light lg:pl-3">
                350 <span className="text-sm text-cream/60">{t.menu.currency}</span>
              </dd>
            </div>
          </dl>
        </div>

        {/* Visual */}
        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-[30rem]">
            {/* Arch frame */}
            <div className="absolute -inset-3 rounded-t-[999px] rounded-b-[2.5rem] border border-gold/40" />
            <div className="relative h-full overflow-hidden rounded-t-[999px] rounded-b-[2rem] shadow-2xl shadow-black/60">
              <Image
                src={khinkali}
                alt={t.menu.dishes.khinkali.name}
                fill
                priority
                sizes="(min-width: 1024px) 480px, 90vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
              {/* Steam */}
              <div className="steam pointer-events-none absolute left-1/2 top-[18%] flex -translate-x-1/2 gap-5">
                <span className="block h-16 w-3 rounded-full bg-white/40 blur-md" />
                <span className="block h-20 w-3 rounded-full bg-white/40 blur-md" />
                <span className="block h-14 w-3 rounded-full bg-white/40 blur-md" />
              </div>
            </div>

            {/* Logo medallion */}
            <div className="absolute -bottom-8 -left-4 sm:-left-10">
              <div className="relative h-32 w-32 sm:h-40 sm:w-40">
                <div className="spin-slow absolute -inset-2 rounded-full border border-dashed border-gold/50" />
                <Image
                  src="/images/logo.jpg"
                  alt="Avdal"
                  fill
                  sizes="160px"
                  className="rounded-full object-cover shadow-xl shadow-black/70 ring-2 ring-gold/60"
                />
              </div>
            </div>

            {/* Open status pill */}
            {isOpen !== null && (
              <div className="absolute -right-2 top-10 flex items-center gap-2 rounded-full border border-gold/30 bg-ink/85 px-4 py-2 text-sm font-medium backdrop-blur sm:-right-6">
                <span className="relative flex h-2.5 w-2.5">
                  {isOpen && <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70" />}
                  <span className={`relative inline-flex h-2.5 w-2.5 rounded-full ${isOpen ? "bg-emerald-400" : "bg-wine"}`} />
                </span>
                {isOpen ? t.status.open : t.status.closed}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

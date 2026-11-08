"use client";

import Image from "next/image";
import { CONTACT, PHOTO_CREDITS } from "../lib/content";
import { useLang } from "./LanguageProvider";
import { InstagramIcon, PhoneIcon } from "./ui";

export function Footer() {
  const { t } = useLang();
  return (
    <footer className="grain relative bg-ink pb-28 pt-16 lg:pb-12">
      <div className="ornament-band absolute inset-x-0 top-0" />
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-8 px-4 pt-6 text-center sm:px-6 lg:flex-row lg:justify-between lg:text-left lg:px-8">
        <div className="flex items-center gap-4">
          <Image src="/images/logo.jpg" alt="Avdal" width={64} height={64} className="rounded-full ring-1 ring-gold/40" />
          <div>
            <p className="font-display text-2xl text-gold-light">{t.brand}</p>
            <p className="text-xs uppercase tracking-[0.2em] text-cream/50">{t.tagline}</p>
          </div>
        </div>

        <nav className="flex flex-wrap justify-center gap-6 text-sm text-cream/70">
          <a href="#menu" className="hover:text-gold-light">{t.nav.menu}</a>
          <a href="#about" className="hover:text-gold-light">{t.nav.about}</a>
          <a href="#gallery" className="hover:text-gold-light">{t.nav.gallery}</a>
          <a href="#contact" className="hover:text-gold-light">{t.nav.contact}</a>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={CONTACT.phoneHref}
            aria-label={t.call}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-gold/40 text-gold transition hover:bg-gold hover:text-ink"
          >
            <PhoneIcon className="h-5 w-5" />
          </a>
          <a
            href={CONTACT.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-gold/40 text-gold transition hover:bg-gold hover:text-ink"
          >
            <InstagramIcon className="h-5 w-5" />
          </a>
        </div>
      </div>
      <p className="mt-10 text-center text-xs text-cream/40">
        © {t.brand} · {t.footer.rights}
      </p>
      <p className="mx-auto mt-3 max-w-3xl px-4 text-center text-[10px] leading-relaxed text-cream/30">
        Photos:{" "}
        {PHOTO_CREDITS.map((c, i) => (
          <span key={c.source}>
            {i > 0 && " · "}
            <a href={c.source} target="_blank" rel="noopener noreferrer" className="hover:text-gold-light">
              “{c.title}”
            </a>{" "}
            by {c.author},{" "}
            <a href={c.licenseUrl} target="_blank" rel="noopener noreferrer" className="hover:text-gold-light">
              {c.license}
            </a>
          </span>
        ))}{" "}
        (cropped) via Wikimedia Commons
      </p>
    </footer>
  );
}

/** Sticky call bar on phones */
export function MobileCallBar() {
  const { t } = useLang();
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-gold/20 bg-ink/95 p-3 backdrop-blur lg:hidden">
      <div className="flex gap-3">
        <a
          href="#menu"
          className="flex-1 rounded-full border border-gold/40 py-3 text-center text-sm font-semibold text-gold-light"
        >
          {t.nav.menu}
        </a>
        <a
          href={CONTACT.phoneHref}
          className="flex flex-[1.4] items-center justify-center gap-2 rounded-full bg-gold py-3 text-sm font-semibold text-ink"
        >
          <PhoneIcon className="h-4 w-4" />
          {t.hero.ctaOrder}
        </a>
      </div>
    </div>
  );
}

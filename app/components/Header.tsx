"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { CONTACT, LANGS } from "../lib/content";
import { useLang } from "./LanguageProvider";
import { PhoneIcon } from "./ui";

function LangSwitch() {
  const { lang, setLang } = useLang();
  return (
    <div className="flex rounded-full border border-gold/30 p-0.5 text-[11px] font-semibold">
      {LANGS.map((l) => (
        <button
          key={l.code}
          type="button"
          onClick={() => setLang(l.code)}
          aria-pressed={lang === l.code}
          className={`rounded-full px-2.5 py-1 transition-colors ${
            lang === l.code ? "bg-gold text-ink" : "text-cream/70 hover:text-gold-light"
          }`}
        >
          {l.label}
        </button>
      ))}
    </div>
  );
}

export function Header() {
  const { t } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#menu", label: t.nav.menu },
    { href: "#about", label: t.nav.about },
    { href: "#gallery", label: t.nav.gallery },
    { href: "#contact", label: t.nav.contact },
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? "border-b border-gold/15 bg-ink/90 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <a href="#top" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <Image
            src="/images/logo.jpg"
            alt="Avdal logo"
            width={44}
            height={44}
            className="rounded-full ring-1 ring-gold/40"
            priority
          />
          <span className="flex flex-col leading-none">
            <span className="font-display text-xl tracking-wide text-gold-light">{t.brand}</span>
            <span className="mt-1 hidden text-[10px] uppercase tracking-[0.2em] text-cream/50 sm:block">
              {t.tagline}
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="relative text-sm font-medium text-cream/80 transition-colors hover:text-gold-light after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-gold after:transition-all hover:after:w-full"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <LangSwitch />
          <a
            href={CONTACT.phoneHref}
            className="flex items-center gap-2 rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-ink transition hover:bg-gold-light"
          >
            <PhoneIcon className="h-4 w-4" />
            {CONTACT.phoneDisplay}
          </a>
        </div>

        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-gold/30 text-gold lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Menu"
          aria-expanded={open}
        >
          <span className="relative block h-3 w-5">
            <span className={`absolute left-0 top-0 h-px w-5 bg-current transition ${open ? "translate-y-1.5 rotate-45" : ""}`} />
            <span className={`absolute left-0 top-1.5 h-px w-5 bg-current transition ${open ? "opacity-0" : ""}`} />
            <span className={`absolute left-0 top-3 h-px w-5 bg-current transition ${open ? "-translate-y-1.5 -rotate-45" : ""}`} />
          </span>
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden transition-[max-height] duration-300 lg:hidden ${open ? "max-h-[28rem]" : "max-h-0"}`}
      >
        <nav className="flex flex-col gap-1 px-4 pb-6 pt-2">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="border-b border-gold/10 py-3 font-display text-2xl text-cream/90"
            >
              {l.label}
            </a>
          ))}
          <div className="mt-4 flex items-center justify-between">
            <LangSwitch />
            <a
              href={CONTACT.phoneHref}
              className="flex items-center gap-2 rounded-full bg-gold px-4 py-2.5 text-sm font-semibold text-ink"
            >
              <PhoneIcon className="h-4 w-4" />
              {t.call}
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}

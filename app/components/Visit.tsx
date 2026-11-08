"use client";

import { CONTACT } from "../lib/content";
import { useLang } from "./LanguageProvider";
import { ClockIcon, InstagramIcon, PhoneIcon, PinIcon, Reveal, SectionHeading, useIsOpen } from "./ui";

export function Visit() {
  const { t } = useLang();
  const isOpen = useIsOpen();
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(CONTACT.mapQuery)}&output=embed`;
  const mapLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(CONTACT.mapQuery)}`;

  const cards = [
    {
      icon: PinIcon,
      label: t.visit.address,
      value: t.visit.addressLine,
      note: t.visit.addressNote,
      href: mapLink,
      cta: t.visit.directions,
      external: true,
    },
    {
      icon: PhoneIcon,
      label: t.visit.phone,
      value: CONTACT.phoneDisplay,
      note: t.visit.deliveryTitle,
      href: CONTACT.phoneHref,
      cta: t.call,
    },
    {
      icon: ClockIcon,
      label: t.visit.hours,
      value: CONTACT.hours,
      note: isOpen === null ? "" : isOpen ? t.status.open : t.status.closed,
      noteClass: isOpen ? "text-herb" : "text-wine",
    },
    {
      icon: InstagramIcon,
      label: t.visit.instagram,
      value: CONTACT.instagramHandle,
      href: CONTACT.instagram,
      cta: "Instagram →",
      external: true,
    },
  ];

  return (
    <section id="contact" className="relative bg-parchment py-24 text-ink sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading eyebrow={t.visit.eyebrow} title={t.visit.title} light />
        </Reveal>

        <div className="mt-16 grid gap-8 lg:grid-cols-[1fr_1.2fr]">
          <div className="grid gap-4 sm:grid-cols-2">
            {cards.map((c, i) => (
              <Reveal key={c.label} delay={i * 80} className="h-full">
                <div className="flex h-full flex-col rounded-3xl border border-gold/30 bg-cream p-6 shadow-sm">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-ink text-gold">
                    <c.icon className="h-5 w-5" />
                  </span>
                  <p className="mt-5 text-xs font-semibold uppercase tracking-[0.2em] text-char/50">{c.label}</p>
                  <p className="mt-2 break-words font-display text-2xl">{c.value}</p>
                  {c.note && <p className={`mt-1 text-sm ${c.noteClass ?? "text-char/65"}`}>{c.note}</p>}
                  {c.href && (
                    <a
                      href={c.href}
                      {...(c.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      className="mt-auto pt-5 text-sm font-semibold text-wine underline-offset-4 hover:underline"
                    >
                      {c.cta}
                    </a>
                  )}
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={150} className="h-full">
            <div className="relative h-full min-h-[22rem] overflow-hidden rounded-3xl border border-gold/30 shadow-xl shadow-ink/10">
              <iframe
                title="Avdal map"
                src={mapSrc}
                className="absolute inset-0 h-full w-full grayscale-[30%] sepia-[15%]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

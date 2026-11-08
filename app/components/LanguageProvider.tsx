"use client";

import { createContext, useCallback, useContext, useEffect, useSyncExternalStore } from "react";
import { DICT, type Lang } from "../lib/content";

type Ctx = { lang: Lang; setLang: (l: Lang) => void; t: (typeof DICT)[Lang] };

const LanguageContext = createContext<Ctx | null>(null);
const STORAGE_KEY = "avdal-lang";
const DEFAULT_LANG: Lang = "hy";

/* Tiny external store backed by localStorage, so the choice survives reloads. */
const listeners = new Set<() => void>();
let memoryLang: Lang | null = null;

function readLang(): Lang {
  if (memoryLang) return memoryLang;
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved && saved in DICT) return saved as Lang;
  } catch {}
  return DEFAULT_LANG;
}

function subscribe(cb: () => void) {
  listeners.add(cb);
  return () => listeners.delete(cb);
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const lang = useSyncExternalStore(subscribe, readLang, () => DEFAULT_LANG);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = useCallback((l: Lang) => {
    memoryLang = l;
    try {
      localStorage.setItem(STORAGE_KEY, l);
    } catch {}
    listeners.forEach((cb) => cb());
  }, []);

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: DICT[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLang must be used inside LanguageProvider");
  return ctx;
}

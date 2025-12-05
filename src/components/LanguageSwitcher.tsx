"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter, usePathname } from "@/i18n/navigation";
import type { Locale } from "@/config/localization";
import { LOCALE_LABELS } from "@/config/localization";

type Props = {
  locales: Locale[];
  currentLocale: Locale;
};

export default function LanguageSwitcher({ locales, currentLocale }: Props) {
  const router = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  function switchLocale(locale: Locale) {
    router.replace(pathname, { locale });
    setOpen(false);
  }

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    }

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  return (
    <div className="relative text-sm font-semibold" ref={dropdownRef}>
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="px-2 py-1 hover:text-slate-600 transition-colors flex items-center gap-1"
      >
        {currentLocale.toUpperCase()}
      </button>

      {open && (
        <div className="absolute right-0 mt-2 bg-white border border-slate-200 shadow-lg rounded-md w-32 z-50 py-1">
          {locales.map((loc) => (
            <button
              key={loc}
              onClick={() => switchLocale(loc)}
              className={`w-full text-left px-4 py-2 hover:bg-slate-50 transition-colors ${
                loc === currentLocale
                  ? "font-semibold text-slate-900 bg-slate-50"
                  : "text-slate-600"
              }`}
            >
              {LOCALE_LABELS[loc]}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import { Locale } from "@/config/localization";
import LanguageSwitcher from "./LanguageSwitcher";
import { CountryMeta } from "@/lib/countries/countries";
import { CountryFlag } from "./CountryFlag";

type Props = {
  locales: Locale[];
  currentLocale: Locale;
  countryMeta: CountryMeta;
};

export default function UtilityBar({
  locales,
  currentLocale,
  countryMeta,
}: Props) {
  const t = useTranslations();
  const pathname = usePathname();
  const [open, setOpen] = useState<boolean>(false);

  const isPersonal = pathname.includes("/personal");
  const isInstitutional = pathname.includes("/institutional");

  useEffect(() => {
    if (open) {
      setOpen(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [open]);

  const handleToggle = (): void => {
    setOpen((prev) => !prev);
  };

  const handleClose = (): void => {
    setOpen(false);
  };

  return (
    <>
      <div
        className="w-full px-4 py-2 flex items-center justify-between relative"
        style={{ borderBottom: "1px solid #C9C9C9" }}
      >
        <div className="w-full max-w-screen-2xl mx-auto px-4 flex items-center justify-between">
          {/* LEFT - Always visible */}
          <div className="flex items-center gap-2">
            <Link
              href={`/${currentLocale}/personal`}
              className={`font-semibold text-sm leading-5 tracking-tight hover:underline relative pb-2 ${
                isPersonal ? "brand-red" : ""
              }`}
            >
              {t("personal")}
              {isPersonal && (
                <span
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-red-600"
                  style={{ bottom: "-8px" }}
                />
              )}
            </Link>

            <span className="brand-grey0 font-semibold text-sm">|</span>

            <Link
              href={`/${currentLocale}/institutional`}
              className={`font-semibold text-sm leading-5 tracking-tight hover:underline relative pb-2 ${
                isInstitutional ? "brand-red" : ""
              }`}
            >
              {t("institutional")}
              {isInstitutional && (
                <span
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-red-600"
                  style={{ bottom: "-8px" }}
                />
              )}
            </Link>
          </div>

          {/* RIGHT - Desktop only */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href={`/${currentLocale}/webtrader`}
              className="font-semibold text-sm leading-5 tracking-tight hover:underline"
            >
              {t("webtrader")}
            </Link>

            <span className="brand-grey0 font-semibold text-sm">|</span>

            <Link
              href={`/${currentLocale}/support`}
              className="font-semibold text-sm leading-5 tracking-tight hover:underline"
            >
              {t("support")}
            </Link>

            <span className="brand-grey0 font-semibold text-sm">|</span>

            <Link
              href={`/${currentLocale}/demo`}
              className="font-semibold text-sm leading-5 tracking-tight hover:underline"
            >
              {t("openDemo")}
            </Link>

            <span className="brand-grey0 font-semibold text-sm">|</span>

            <CountryFlag
              flagUrl={countryMeta.flagUrl}
              label={countryMeta.label}
            />

            <LanguageSwitcher locales={locales} currentLocale={currentLocale} />
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2 text-slate-700 hover:bg-slate-100 md:hidden"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={handleToggle}
          >
            <span className="sr-only">Open menu</span>
            <div className="flex h-4 w-4 flex-col justify-between">
              <span
                className={`h-[2px] w-full bg-current transition-transform ${
                  open ? "translate-y-[7px] rotate-45" : ""
                }`}
              />
              <span
                className={`h-[2px] w-full bg-current transition-opacity ${
                  open ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`h-[2px] w-full bg-current transition-transform ${
                  open ? "-translate-y-[7px] -rotate-45" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu panel */}
      {open && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/20 z-40 md:hidden"
            onClick={handleClose}
            aria-hidden="true"
          />

          {/* Menu */}
          <div className="fixed top-[48px] right-0 w-64 bg-white shadow-lg z-50 md:hidden border-l border-slate-200">
            <div className="flex flex-col p-4 gap-4">
              <Link
                href={`/${currentLocale}/webtrader`}
                className="font-semibold text-sm py-2 hover:text-slate-600"
                onClick={handleClose}
              >
                {t("webtrader")}
              </Link>

              <Link
                href={`/${currentLocale}/support`}
                className="font-semibold text-sm py-2 hover:text-slate-600"
                onClick={handleClose}
              >
                {t("support")}
              </Link>

              <Link
                href={`/${currentLocale}/demo`}
                className="font-semibold text-sm py-2 hover:text-slate-600"
                onClick={handleClose}
              >
                {t("openDemo")}
              </Link>

              <div className="border-t border-slate-200 pt-4 flex items-center gap-3">
                <CountryFlag
                  flagUrl={countryMeta.flagUrl}
                  label={countryMeta.label}
                />
                <LanguageSwitcher
                  locales={locales}
                  currentLocale={currentLocale}
                />
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

"use client";

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
  const t = useTranslations("utility");
  const pathname = usePathname();

  const isPersonal = pathname.includes("/personal");
  const isInstitutional = pathname.includes("/institutional");

  return (
    <>
      {/* Top UtilityBar */}
      <div className="w-full px-4 py-2 border-b border-brand-grey">
        <div className="w-full max-w-screen-2xl mx-auto px-4 flex items-center justify-between">
          {/* LEFT - Always visible on all screens */}
          <div className="flex items-center gap-2">
            <Link
              href={`/${currentLocale}/personal`}
              className={`font-semibold text-sm hover:underline relative pb-2 ${isPersonal ? "text-brand-red" : ""}`}
            >
              {t("personal")}
              {isPersonal && (
                <span
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-red"
                  style={{ bottom: "-8px" }}
                />
              )}
            </Link>

            <span className="font-semibold text-sm text-brand-grey">|</span>

            <Link
              href={`/${currentLocale}/institutional`}
              className={`font-semibold text-sm hover:underline relative pb-2 ${isInstitutional ? "text-brand-red" : ""}`}
            >
              {t("institutional")}
              {isInstitutional && (
                <span
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-red"
                  style={{ bottom: "-8px" }}
                />
              )}
            </Link>
          </div>

          {/* RIGHT - Desktop only */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href={`/${currentLocale}/webtrader`}
              className="font-semibold text-sm hover:underline"
            >
              {t("webtrader")}
            </Link>

            <span className="font-semibold text-sm text-brand-grey">|</span>

            <Link
              href={`/${currentLocale}/support`}
              className="font-semibold text-sm hover:underline"
            >
              {t("support")}
            </Link>

            <span className="font-semibold text-sm text-brand-grey">|</span>

            <Link
              href={`/${currentLocale}/demo`}
              className="font-semibold text-sm hover:underline"
            >
              {t("openDemo")}
            </Link>

            <span className="font-semibold text-sm text-brand-grey">|</span>

            <div className="flex items-center">
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
      </div>

      {/* Mobile Sticky Bottom Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 px-4 py-3 z-50 md:hidden shadow-lg">
        <div className="flex items-center justify-center gap-2 text-sm">
          <Link
            href={`/${currentLocale}/webtrader`}
            className="font-semibold hover:text-slate-600"
          >
            {t("webtrader")}
          </Link>

          <span className="font-semibold text-brand-grey">|</span>

          <Link
            href={`/${currentLocale}/support`}
            className="font-semibold hover:text-slate-600"
          >
            {t("support")}
          </Link>

          <span className="font-semibold text-brand-grey">|</span>

          <Link
            href={`/${currentLocale}/demo`}
            className="font-semibold hover:text-slate-600"
          >
            {t("openDemo")}
          </Link>

          <span className="font-semibold text-brand-grey">|</span>

          <div className="flex items-center">
            <CountryFlag
              flagUrl={countryMeta.flagUrl}
              label={countryMeta.label}
            />
            <LanguageSwitcher locales={locales} currentLocale={currentLocale} />
          </div>
        </div>
      </div>
    </>
  );
}

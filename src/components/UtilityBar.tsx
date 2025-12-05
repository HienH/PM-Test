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
    <div className="hidden md:block border-b border-brand-grey">
      <div className="max-w-[1440px] mx-auto px-16 py-2">
        <div className="flex items-center justify-between">
          {/* Left - Navigation */}
          <div className="flex items-center gap-2">
            <Link
              href={`/${currentLocale}/personal`}
              className={`relative font-semibold text-sm hover:underline ${isPersonal ? "text-brand-red" : ""}`}
            >
              {t("personal")}
              {isPersonal && (
                <span
                  className="absolute left-0 right-0 h-0.5 bg-brand-red"
                  style={{ bottom: "-12px" }}
                />
              )}
            </Link>

            <span className="text-sm font-semibold text-brand-grey">|</span>

            <Link
              href={`/${currentLocale}/institutional`}
              className={`relative font-semibold text-sm hover:underline ${isInstitutional ? "text-brand-red" : ""}`}
            >
              {t("institutional")}
              {isInstitutional && (
                <span
                  className="absolute left-0 right-0 h-0.5 bg-brand-red"
                  style={{ bottom: "-8px" }}
                />
              )}
            </Link>
          </div>

          {/* Right - Links & Language */}
          <div className="flex items-center gap-4">
            <Link
              href={`/${currentLocale}/webtrader`}
              className="font-semibold text-sm hover:underline"
            >
              {t("webtrader")}
            </Link>

            <span className="text-sm font-semibold text-brand-grey">|</span>

            <Link
              href={`/${currentLocale}/support`}
              className="font-semibold text-sm hover:underline"
            >
              {t("support")}
            </Link>

            <span className="text-sm font-semibold text-brand-grey">|</span>

            <Link
              href={`/${currentLocale}/demo`}
              className="font-semibold text-sm hover:underline"
            >
              {t("openDemo")}
            </Link>

            <span className="text-sm font-semibold text-brand-grey">|</span>

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
    </div>
  );
}

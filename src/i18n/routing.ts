import { defineRouting } from "next-intl/routing";
import { VERIFIED_LOCALES, DEFAULT_LOCALE } from "@/config/localization";

export const routing = defineRouting({
  locales: VERIFIED_LOCALES,
  defaultLocale: DEFAULT_LOCALE,
});

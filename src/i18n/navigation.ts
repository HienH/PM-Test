import { createNavigation } from "next-intl/navigation";
import { VERIFIED_LOCALES, DEFAULT_LOCALE } from "@/config/localization";

export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation({
    locales: VERIFIED_LOCALES,
    defaultLocale: DEFAULT_LOCALE,
  });

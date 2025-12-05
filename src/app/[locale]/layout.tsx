import { getMessages } from "next-intl/server";
import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { NextIntlClientProvider } from "next-intl";
import { Locale } from "@/config/localization";
import UtilityBar from "@/components/UtilityBar";
import { cookies } from "next/headers";
import {
  CountryCode,
  getCountryMeta,
  getCountryOrDefault,
} from "@/lib/countries/countries";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: Locale }>;
};

export async function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;
  if (!routing.locales.includes(locale)) notFound();
  setRequestLocale(locale);
  const messages = await getMessages();

  const cookieStore = await cookies();

  // assume backend sets country cookie
  const countryCookie = cookieStore.get("country")?.value;

  const countryCode: CountryCode = getCountryOrDefault(countryCookie);
  const countryMeta = getCountryMeta(countryCode);

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <UtilityBar
        locales={routing.locales}
        currentLocale={locale}
        countryMeta={countryMeta}
      />
      {children}
    </NextIntlClientProvider>
  );
}

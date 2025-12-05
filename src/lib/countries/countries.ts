// lib/countries.ts
import countriesData from "./countries.json";

type CountryData = {
  label: string;
  currency: string;
};

type CountriesConfig = Record<string, CountryData>;

const countries: CountriesConfig = countriesData;

// possibly set this in env
export const DEFAULT_COUNTRY: CountryCode = "AE";

export const SUPPORTED_COUNTRIES = Object.keys(countries) as ReadonlyArray<
  keyof typeof countries
>;
export type CountryCode = keyof typeof countries;

export interface CountryMeta extends CountryData {
  code: CountryCode;
  flagUrl: string;
}

export function getCountryOrDefault(code: string | undefined): CountryCode {
  if (code && isValidCountry(code)) {
    return code;
  }
  return DEFAULT_COUNTRY;
}

export function getCountryMeta(code: CountryCode): CountryMeta {
  return {
    code,
    ...countries[code],
    flagUrl: `/flags/${code.toLowerCase()}.svg`,
  };
}

export function isValidCountry(code: string): code is CountryCode {
  return code in countries;
}

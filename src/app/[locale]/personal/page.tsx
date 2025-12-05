import { useTranslations } from "next-intl";

export default function PersonalHome() {
  const t = useTranslations();

  return <p>{t("personal")}</p>;
}

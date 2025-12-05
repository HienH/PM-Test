import { useTranslations } from "next-intl";

export default function PersonalHome() {
  const t = useTranslations();

  return <p className="bg-yellow-200">{t("personal")}</p>;
}

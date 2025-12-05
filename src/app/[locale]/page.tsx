import { redirect } from "next/navigation";

type Props = {
  params: {
    locale: string;
  };
};

export default async function LocaleHome({ params }: Props) {
  const { locale } = await params;

  redirect(`/${locale}/personal`);
}

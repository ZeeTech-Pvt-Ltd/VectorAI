import { resolveCountry } from "../geo";
import { langForCountry, THANKS } from "../../content/i18n";
import Thanks from "./thanks";

export async function generateMetadata({ searchParams }) {
  const params = await searchParams;
  const country = await resolveCountry(params);
  const lang = langForCountry(country);
  const t = THANKS[lang] || THANKS.en;
  return {
    title: t.title,
    robots: { index: false, follow: false },
  };
}

export default async function ThankYouPage({ searchParams }) {
  const params = await searchParams;
  const country = await resolveCountry(params);
  const lang = langForCountry(country);
  return <Thanks lang={lang} country={country} />;
}

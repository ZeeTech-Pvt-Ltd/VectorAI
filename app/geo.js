// Server-side visitor country resolution (used by the landing and thank-you
// pages). Order: ?country= / ?lang= override for testing, then the geo
// headers set by the hosting platform, then UK English as the default.
import { headers } from "next/headers";
import { LANG_BY_COUNTRY } from "../content/i18n";

const LANG_TO_COUNTRY = Object.fromEntries(
  Object.entries(LANG_BY_COUNTRY).map(([cc, lang]) => [lang, cc])
);

function sanitizeCode(v) {
  if (typeof v !== "string") return "";
  return v.replace(/[^A-Za-z]/g, "").toUpperCase().slice(0, 2);
}

export async function resolveCountry(params) {
  const fromCountry = sanitizeCode(params?.country);
  if (fromCountry && LANG_BY_COUNTRY[fromCountry]) return fromCountry;
  const fromLang = sanitizeCode(params?.lang);
  if (fromLang && LANG_TO_COUNTRY[fromLang]) return LANG_TO_COUNTRY[fromLang];
  try {
    const h = await headers();
    const cc = (
      h.get("x-vercel-ip-country") ||
      h.get("cf-ipcountry") ||
      h.get("x-country-code") ||
      ""
    )
      .trim()
      .toUpperCase();
    if (cc.length === 2) return cc;
  } catch {
    /* headers unavailable — fall through to the default */
  }
  return "GB";
}

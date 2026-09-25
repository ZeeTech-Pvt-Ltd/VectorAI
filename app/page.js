import { headers } from "next/headers";
import Landing from "./landing";
import LANDING_HTML from "../content/landing-content";
import {
  translationFor,
  langForCountry,
  PLACEHOLDERS,
  LANG_BY_COUNTRY,
} from "../content/i18n";

const DEFAULT_KEYWORD = "Vector Ai";

function escapeHtml(value) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function sanitizeKeyword(q) {
  if (typeof q !== "string") return "";
  // Keep it to a plain brand name: strip control chars, cap the length.
  return q.replace(/[\u0000-\u001f\u007f]/g, "").trim().slice(0, 80);
}

// Title Case, matching the original "Gully Bondstead" casing.
function titleCase(value) {
  return value
    .split(/\s+/)
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
}

// UpperCamelCase (PascalCase) for the ?f= campaign keyword. Separators
// (spaces/hyphens) split words; inside a single token, known brand words are
// matched (longest first, case-insensitive), so "finlockridge" becomes
// "FinlockRidge" and "nexoraaiplatform" becomes "NexoraAIPlatform".
// All-caps entries (AI) keep their caps. Unknown words just get a leading cap.
const CAMEL_WORDS = [
  "AI",
  "Platform",
  "Insights",
  "Wealthholm",
  "Accruvance",
  "Vestgrove",
  "Wertburg",
  "Cevsterflax",
  "Austerio",
  "Kapitune",
  "Zinsmere",
  "Gewinode",
  "Nexora",
  "Zephgain",
  "Rendaven",
  "Dorivo",
  "Finlock",
  "Ridge",
  "Capital",
  "Wealth",
  "Ledger",
  "Market",
  "Global",
  "Trade",
  "Group",
  "Smart",
  "Raven",
  "Bright",
  "Keen",
  "Gem",
  "Polar",
  "Fels",
  "Lyra",
  "Prime",
  "Vault",
  "Edge",
  "Fund",
  "Gain",
  "Hub",
  "Lab",
  "Core",
  "Max",
  "Pro",
  "Up",
  "AU",
  "X",
];
const CAMEL_REGEX = new RegExp(
  CAMEL_WORDS.sort((a, b) => b.length - a.length)
    .map((w) => w.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"))
    .join("|"),
  "gi"
);

function upperCamel(value) {
  return value
    .split(/[^A-Za-z0-9]+/)
    .filter(Boolean)
    .map((word) => {
      const cameled = word.replace(CAMEL_REGEX, (match) => {
        const known = CAMEL_WORDS.find(
          (w) => w.toLowerCase() === match.toLowerCase()
        );
        if (known) {
          return known === known.toUpperCase()
            ? known
            : known.charAt(0).toUpperCase() + known.slice(1);
        }
        return match.charAt(0).toUpperCase() + match.slice(1);
      });
      return cameled.charAt(0).toUpperCase() + cameled.slice(1);
    })
    .join("");
}

function getKeyword(params) {
  // ?f= is the campaign keyword (sent by the review site CTAs) and is shown
  // on the whole page in UpperCamelCase, e.g. ?f=FinlockRidge → FinlockRidge.
  const fromF = sanitizeKeyword(params?.f);
  if (fromF) return upperCamel(fromF);
  // Legacy ?q= keyword is title-cased for display.
  const raw = sanitizeKeyword(params?.q);
  if (!raw) return DEFAULT_KEYWORD;
  return titleCase(raw);
}

function applyKeyword(html, keyword) {
  // The HTML ships with "Gully Bondstead" baked in; the active brand always
  // replaces it — "Vector Ai" by default, or the ?f= campaign keyword.
  const safe = escapeHtml(keyword);
  const safePlus = escapeHtml(keyword.replace(/ /g, "+"));
  return html
    .split("Gully Bondstead")
    .join(safe)
    .split("Gully+Bondstead")
    .join(safePlus);
}

// Visitor country resolution: ?country= / ?lang= override for testing, then
// the geo headers set by the hosting platform, then UK English as default.
const LANG_TO_COUNTRY = Object.fromEntries(
  Object.entries(LANG_BY_COUNTRY).map(([cc, lang]) => [lang, cc])
);

function sanitizeCode(v) {
  if (typeof v !== "string") return "";
  return v.replace(/[^A-Za-z]/g, "").toUpperCase().slice(0, 2);
}

async function resolveCountry(params) {
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

// Replace text nodes, form placeholders and the hidden geo/lang fields.
function translateHtml(html, dict, lang, cc) {
  let out = html.replace(/>([^<>]+)</g, (match, text) => {
    const trimmed = text.trim();
    if (!trimmed) return match;
    const replacement = dict[trimmed];
    if (!replacement || replacement === trimmed) return match;
    const start = text.indexOf(trimmed);
    return (
      ">" +
      text.slice(0, start) +
      replacement +
      text.slice(start + trimmed.length) +
      "<"
    );
  });
  const ph = PLACEHOLDERS[lang] || PLACEHOLDERS.en;
  for (const [en, loc] of Object.entries(ph)) {
    if (loc !== en) {
      out = out
        .split(`placeholder="${en}"`)
        .join(`placeholder="${loc}"`);
    }
  }
  out = out
    .split('name="geo" value="gb"')
    .join(`name="geo" value="${cc.toLowerCase()}"`);
  out = out
    .split('name="lang" value="en"')
    .join(`name="lang" value="${lang}"`);
  return out;
}

export async function generateMetadata({ searchParams }) {
  const params = await searchParams;
  const keyword = getKeyword(params);
  return {
    title: keyword,
    description: keyword,
    robots: { index: false, follow: false },
  };
}

export default async function Page({ searchParams }) {
  const params = await searchParams;
  const keyword = getKeyword(params);
  const country = await resolveCountry(params);
  const lang = langForCountry(country);
  // Translate first so the keyword replacement also works inside the
  // translated strings (the brand name stays replaceable in every language).
  const translated = translateHtml(
    LANDING_HTML,
    translationFor(country),
    lang,
    country
  );
  const html = applyKeyword(translated, keyword);
  // Campaign leads are tagged "<Keyword>-ATP"; the default is the plain brand.
  const offerName =
    keyword !== DEFAULT_KEYWORD ? `${keyword}-ATP` : "VectorAI-ATP";
  return (
    <Landing html={html} offerName={offerName} country={country} lang={lang} />
  );
}

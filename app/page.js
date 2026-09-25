import Landing from "./landing";
import LANDING_HTML from "../content/landing-content";
import { resolveCountry } from "./geo";
import {
  translationFor,
  langForCountry,
  PLACEHOLDERS,
  TITLE_SUFFIX,
  META_DESCRIPTION,
  testimonialAvatars,
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
  // Testimonial photos -> localized portrait photos on non-English pages.
  if (lang !== "en") {
    const avatars = testimonialAvatars(lang);
    if (avatars) {
      [
        '<img src="/assets/img/ava-1.webp" alt="" srcset="/assets/img/ava-1-2x.webp 2x">',
        '<img src="/assets/img/ava-2.webp" alt="" srcset="/assets/img/ava-2-2x.webp 2x">',
        '<img src="/assets/img/ava-3.webp" alt="" srcset="/assets/img/ava-3-2x.webp 2x">',
      ].forEach((imgTag, i) => {
        out = out
          .split(imgTag)
          .join(`<img src="${avatars[i]}" alt="">`);
      });
    }
  }
  return out;
}

// Self-referencing canonical URL: the visited query string rides along
// (Next.js exposes searchParams as a plain object, not URLSearchParams).
function buildCanonical(params) {
  const query = new URLSearchParams();
  Object.entries(params || {}).forEach(([key, value]) => {
    if (Array.isArray(value)) value.forEach((v) => query.append(key, v));
    else if (value !== undefined && value !== null) query.append(key, value);
  });
  const queryString = query.toString();
  return queryString ? `/?${queryString}` : "/";
}

// Hreflang alternates: the same page is served per language, selected
// either by visitor IP or explicitly with ?lang=.
const HREFLANG_LANGUAGES = {
  "x-default": "/",
  en: "/?lang=en",
  de: "/?lang=de",
  fr: "/?lang=fr",
  nl: "/?lang=nl",
  sv: "/?lang=sv",
  no: "/?lang=no",
  da: "/?lang=da",
  fi: "/?lang=fi",
  ja: "/?lang=ja",
};

export async function generateMetadata({ searchParams }) {
  const params = await searchParams;
  const keyword = getKeyword(params);
  const country = await resolveCountry(params);
  const lang = langForCountry(country);
  const brand = keyword; // "Vector Ai" by default, or the campaign keyword
  const title = `${brand}™ | ${TITLE_SUFFIX[lang] || TITLE_SUFFIX.en}`;
  const description = (META_DESCRIPTION[lang] || META_DESCRIPTION.en)(brand);
  return {
    title,
    description,
    keywords: [
      brand,
      "Vector Ai",
      "AI trading",
      "automated trading",
      "cryptocurrency trading bot",
      "passive income",
      "crypto income",
    ],
    alternates: {
      // Self-referencing canonical: the campaign params ride along so each
      // keyword URL is its own canonical page (?f=<keyword>&subid=BIT&src=ATP).
      canonical: buildCanonical(params),
      languages: HREFLANG_LANGUAGES,
    },
    openGraph: {
      type: "website",
      siteName: "Vector Ai",
      title,
      description,
      url: "/",
      locale: lang === "en" ? "en_GB" : `${lang}_${country}`,
    },
    twitter: {
      card: "summary",
      title,
      description,
    },
    robots: { index: true, follow: true },
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
    <Landing
      html={html}
      offerName={offerName}
      country={country}
      lang={lang}
      brand={keyword}
    />
  );
}

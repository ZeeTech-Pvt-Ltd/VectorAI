import Landing from "./landing";
import LANDING_HTML from "../content/landing-content";

const DEFAULT_KEYWORD = "Gully Bondstead";

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
  if (!keyword || keyword === DEFAULT_KEYWORD) return html;
  const safe = escapeHtml(keyword);
  const safePlus = escapeHtml(keyword.replace(/ /g, "+"));
  return html
    .split("Gully Bondstead")
    .join(safe)
    .split("Gully+Bondstead")
    .join(safePlus);
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
  const html = applyKeyword(LANDING_HTML, keyword);
  // Campaign leads are tagged "<Keyword>-ATP"; the default is the plain brand.
  const offerName =
    keyword !== DEFAULT_KEYWORD ? `${keyword}-ATP` : "GullyBondstead-ATP";
  return <Landing html={html} offerName={offerName} />;
}

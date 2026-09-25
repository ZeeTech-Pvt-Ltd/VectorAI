"use client";

import { useEffect, useState } from "react";
import { langForCountry, LANG_BY_COUNTRY, THANKS } from "../../content/i18n";

export default function Thanks({ lang: serverLang, country: serverCountry }) {
  const [state, setState] = useState({
    lang: serverLang,
    country: serverCountry,
  });

  useEffect(() => {
    document.documentElement.lang = state.lang;

    // Dev/localhost fallback: no server geo headers, so resolve the country
    // client-side unless it was forced via ?country= / ?lang=.
    if (serverCountry !== "GB") return;
    if (/[?&](country|lang)=/.test(window.location.search)) return;
    let cancelled = false;
    (async () => {
      try {
        const res = await fetch("https://ipwho.is/");
        const data = await res.json();
        const cc = String(data?.country_code || "").toUpperCase();
        if (!cancelled && cc.length === 2 && LANG_BY_COUNTRY[cc] && cc !== "GB") {
          setState({ lang: langForCountry(cc), country: cc });
        }
      } catch {
        /* offline — keep the English default */
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [serverCountry, state.lang]);

  useEffect(() => {
    document.documentElement.lang = state.lang;
  }, [state.lang]);

  const t = THANKS[state.lang] || THANKS.en;

  return (
    <div
      className="container"
      style={{ maxWidth: "700px", padding: "100px 15px", textAlign: "center" }}
    >
      <h1 className="title" style={{ fontSize: "44px", marginBottom: "24px" }}>
        {t.title}
      </h1>
      <p
        style={{
          fontSize: "18px",
          lineHeight: 1.6,
          color: "#4d4d4d",
          marginBottom: "36px",
        }}
      >
        {t.body}
      </p>
      <a
        href="/"
        style={{
          display: "inline-block",
          background: "#0177fb",
          color: "#fff",
          fontWeight: 700,
          fontSize: "18px",
          textTransform: "uppercase",
          textDecoration: "none",
          borderRadius: "50px",
          padding: "18px 48px",
        }}
      >
        {t.back}
      </a>
    </div>
  );
}

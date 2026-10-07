"use client";

import { useEffect, useRef } from "react";
import {
  translationFor,
  langForCountry,
  PLACEHOLDERS,
  LANG_BY_COUNTRY,
  TITLE_SUFFIX,
  META_DESCRIPTION,
  testimonialAvatars,
} from "../content/i18n";

export default function Landing({
  html,
  offerName = "VectorAI-ATP",
  country = "GB",
  lang = "en",
  brand = "Vector Ai",
}) {
  const wrapRef = useRef(null);

  useEffect(() => {
    const root = wrapRef.current;
    if (!root) return;

    document.documentElement.lang = lang;

    // The rendered DOM already has the active brand baked in (e.g. Zephgain
    // from ?f=), but the translation dictionaries are keyed with the original
    // "Gully Bondstead". Rebuild the dict against the active brand so brand
    // strings translate too.
    const normalizeDictForBrand = (dict) => {
      if (!brand || brand === "Gully Bondstead") return dict;
      // Match the server-side rendering: the brand in the DOM carries
      // zero-width break opportunities at camelCase boundaries.
      const breakableBrand = brand
        .replace(/([a-z0-9])([A-Z])/g, "$1​$2")
        .replace(/([A-Z])([A-Z][a-z])/g, "$1​$2");
      const plus = brand.replace(/ /g, "+");
      const out = {};
      for (const [key, value] of Object.entries(dict)) {
        const newKey = key
          .split("Gully Bondstead")
          .join(breakableBrand)
          .split("Gully+Bondstead")
          .join(plus);
        out[newKey] = value
          .split("Gully Bondstead")
          .join(breakableBrand)
          .split("Gully+Bondstead")
          .join(plus);
      }
      return out;
    };

    // Translate the already-rendered DOM for a locale.
    const applyDomTranslation = (dict, cc, localeLang) => {
      const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
      const textNodes = [];
      while (walker.nextNode()) textNodes.push(walker.currentNode);
      textNodes.forEach((node) => {
        const full = node.textContent;
        const trimmed = full.trim();
        if (!trimmed) return;
        const replacement = dict[trimmed];
        if (!replacement || replacement === trimmed) return;
        const start = full.indexOf(trimmed);
        node.textContent =
          full.slice(0, start) + replacement + full.slice(start + trimmed.length);
      });
      const ph = PLACEHOLDERS[localeLang] || PLACEHOLDERS.en;
      root.querySelectorAll("input[placeholder]").forEach((input) => {
        const loc = ph[input.getAttribute("placeholder")];
        if (loc) input.setAttribute("placeholder", loc);
      });
      root
        .querySelectorAll('input[name="geo"]')
        .forEach((input) => (input.value = cc.toLowerCase()));
      root
        .querySelectorAll('input[name="lang"]')
        .forEach((input) => (input.value = localeLang));

      // Testimonial photos -> localized portrait photos.
      if (localeLang !== "en") {
        const avatars = testimonialAvatars(localeLang);
        if (avatars) {
          root.querySelectorAll(".testimonials-box img").forEach((img, i) => {
            if (avatars[i]) {
              img.setAttribute("src", avatars[i]);
              img.removeAttribute("srcset");
            }
          });
        }
      }

      // Keep the <head> in sync: title and meta descriptions follow the
      // language that just got applied to the page.
      document.documentElement.lang = localeLang;
      document.title = `${brand}™ | ${TITLE_SUFFIX[localeLang] || TITLE_SUFFIX.en}`;
      const description = (META_DESCRIPTION[localeLang] || META_DESCRIPTION.en)(brand);
      const setMeta = (selector, attribute, value) => {
        const el = document.querySelector(selector);
        if (el && value) el.setAttribute(attribute, value);
      };
      setMeta('meta[name="description"]', "content", description);
      setMeta('meta[property="og:title"]', "content", document.title);
      setMeta('meta[property="og:description"]', "content", description);
      setMeta('meta[name="twitter:title"]', "content", document.title);
      setMeta('meta[name="twitter:description"]', "content", description);
    };

    // --- Geo detection fallback. The server may resolve a country without
    // a translated language (e.g. PK -> English), or no country at all
    // (localhost has no geo headers). Re-check client-side and translate
    // whenever the browser's actual country is a translated one and differs
    // from the server's resolution. Resolved before the phone library
    // initializes so the phone widget also follows.---
    const geoReady = (async () => {
      if (/[?&](country|lang)=/.test(window.location.search)) return;
      try {
        const res = await fetch("https://ipwho.is/");
        const data = await res.json();
        const cc = String(data?.country_code || "").toUpperCase();
        if (cc.length === 2 && LANG_BY_COUNTRY[cc] && cc !== country) {
          applyDomTranslation(
            normalizeDictForBrand(translationFor(cc)),
            cc,
            langForCountry(cc)
          );
        }
      } catch {
        /* offline — keep the server-rendered language */
      }
    })();

    // --- FAQ accordion (ported from original script.js) ---
    // Only one answer stays open at a time: clicking a question closes the
    // others; clicking the open one closes it. Listeners are tracked and
    // removed on cleanup so the dev-mode double effect (React StrictMode)
    // never stacks two handlers per click.
    const faqHandlers = new Map();
    root.querySelectorAll(".faq-item").forEach((item) => {
      const onClick = () => {
        const wasOpen = item.classList.contains("active");
        root
          .querySelectorAll(".faq-item.active")
          .forEach((el) => el.classList.remove("active"));
        if (!wasOpen) item.classList.add("active");
      };
      faqHandlers.set(item, onClick);
      item.addEventListener("click", onClick);
    });

    // --- Countdown timer (ported from original script.js) ---
    let totalSeconds = 2160;
    function updateTimer() {
      const minutes = Math.floor(totalSeconds / 60);
      const seconds = totalSeconds % 60;
      const minEl = root.querySelector("#minutes");
      const secEl = root.querySelector("#seconds");
      if (minEl) minEl.textContent = String(minutes).padStart(2, "0");
      if (secEl) secEl.textContent = String(seconds).padStart(2, "0");
      if (totalSeconds <= 0) clearInterval(timerInterval);
      else totalSeconds -= 1;
    }
    updateTimer();
    const timerInterval = setInterval(updateTimer, 1000);

    // --- Fade-in reveal on scroll (ported from original script.js) ---
    const fadeEls = root.querySelectorAll(".fade-in");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );
    fadeEls.forEach((el) => observer.observe(el));

    // --- intl-tel-input (original CDN library, initialized on each phone input) ---
    const ITI_JS = "https://cdn.jsdelivr.net/npm/intl-tel-input@23.1.0/build/js/intlTelInput.min.js";
    const ITI_UTILS = "https://cdn.jsdelivr.net/npm/intl-tel-input@23.1.0/build/js/utils.js";
    const itiInstances = [];

    const loadScript = (src) =>
      new Promise((resolve, reject) => {
        const script = document.createElement("script");
        script.src = src;
        script.async = true;
        script.onload = resolve;
        script.onerror = reject;
        document.head.appendChild(script);
      });

    (async () => {
      try {
        await loadScript(ITI_JS);
        await geoReady;
      } catch {
        return; // CDN unreachable — leave the pre-rendered markup as is.
      }
      const geoValue = root.querySelector('input[name="geo"]')?.value || "auto";
      root.querySelectorAll('input[name="phone"]').forEach((input) => {
        // The saved DOM ships the library's own wrapper pre-rendered (stale);
        // unwrap the input before initializing a fresh instance on it.
        const staleWrapper = input.closest(".iti");
        if (staleWrapper) {
          staleWrapper.parentNode.insertBefore(input, staleWrapper);
          staleWrapper.remove();
        }
        input.style.paddingLeft = ""; // let the library manage flag/dial-code padding
        const iti = window.intlTelInput(input, {
          initialCountry: geoValue,
          utilsScript: ITI_UTILS,
          separateDialCode: true,
          strictMode: true,
          showFlags: true,
        });
        itiInstances.push(iti);
        input.addEventListener("countrychange", () => {
          const countryData = iti.getSelectedCountryData();
          const phonecc = input
            .closest("form")
            ?.querySelector('input[name="phonecc"]');
          if (phonecc && countryData?.dialCode) {
            phonecc.value = `+${countryData.dialCode}`;
          }
        });
      });
    })();

    // --- Trade panel calculator (ported from trade-panel-4-ice demo).
    // Self-contained; returns a cleanup so StrictMode remounts stay safe. ---
    let stopTradePanel = null;
    const startTradePanel = () => {
      const panelEl = document.getElementById("panel");
      if (!panelEl) return () => {};
      const cleanup = [];
      const on = (el, ev, fn) => {
        el.addEventListener(ev, fn);
        cleanup.push(() => el.removeEventListener(ev, fn));
      };
      const $ = (id) => document.getElementById(id);
      const ASSETS = [
        ["BTC / GBP", 48250, "Crypto"], ["ETH / GBP", 2610, "Crypto"], ["SOL / GBP", 118.4, "Crypto"],
        ["XRP / GBP", 0.4821, "Crypto"], ["DOGE / GBP", 0.1236, "Crypto"],
        ["EUR / USD", 1.0842, "Forex"], ["GBP / USD", 1.2715, "Forex"], ["USD / JPY", 151.32, "Forex"],
        ["Gold", 1984.5, "Commodities"], ["Silver", 23.41, "Commodities"], ["Brent oil", 78.62, "Commodities"],
        ["NASDAQ 100", 17865, "Indices & stocks"], ["FTSE 100", 7692, "Indices & stocks"],
        ["Nvidia", 712.3, "Indices & stocks"], ["Tesla", 196.8, "Indices & stocks"], ["Apple", 182.5, "Indices & stocks"],
      ].map(([name, p, grp]) => ({ name, grp, base: p, cur: p, ticks: [] }));
      const VOL = 0.006, START = 10000;

      // build select
      const sel = $("asset");
      let og = null;
      sel.replaceChildren();
      ASSETS.forEach((a, i) => {
        if (!og || og.label !== a.grp) {
          og = document.createElement("optgroup");
          og.label = a.grp;
          sel.appendChild(og);
        }
        const o = document.createElement("option");
        o.value = i;
        o.textContent = a.name;
        og.appendChild(o);
      });

      // warm up price history
      ASSETS.forEach((a) => {
        for (let i = 0; i < 360; i++) { a.cur *= 1 + (Math.random() - 0.5) * VOL; a.ticks.push(a.cur); }
        a.base = a.ticks[0];
      });

      let tickN = 0, balance, total, wins, losses, positions, history, equity, ai = false, aiIdle = 0, k = 2, nextId = 1, lastPrice = null;
      function init() { balance = START; total = 0; wins = 0; losses = 0; positions = []; history = []; equity = [START]; lastPrice = null; }
      init();

      const gbp = (v) => (v < 0 ? "-£" : "£") + Math.abs(v).toLocaleString("en-GB", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
      const fmt = (v) => (v < 10 ? v.toFixed(4) : v.toLocaleString("en-GB", { minimumFractionDigits: 2, maximumFractionDigits: 2 }));
      const cls = (el, v) => { el.classList.toggle("up", v > 0); el.classList.toggle("down", v < 0); };
      const now = () => new Date().toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit", second: "2-digit" });
      const cur = () => ASSETS[+sel.value];
      const pnl = (p) => p.amount * (ASSETS[p.a].cur - p.entry) / p.entry;
      const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;

      function drawPrice() {
        const a = cur(), pe = $("price");
        if (lastPrice !== null && a.cur !== lastPrice && !reduce) {
          pe.classList.remove("fu", "fd");
          void pe.offsetWidth;
          pe.classList.add(a.cur > lastPrice ? "fu" : "fd");
          setTimeout(() => pe.classList.remove("fu", "fd"), 60);
        }
        lastPrice = a.cur;
        pe.textContent = fmt(a.cur);
        const pct = (a.cur - a.base) / a.base * 100, c = $("chg");
        c.textContent = (pct >= 0 ? "+" : "") + pct.toFixed(2) + "%";
        c.className = "chg " + (pct >= 0 ? "up" : "down");
      }
      function drawStats() {
        roll($("bal"), balance);
        roll($("tot"), total);
        cls($("tot"), total);
        const n = wins + losses;
        $("win").textContent = n ? Math.round(wins / n * 100) + "% (" + n + ")" : "—";
        $("open").textContent = positions.length;
      }
      function drawPositions() {
        const box = $("positions");
        if (!positions.length) { box.innerHTML = '<div class="empty">No open trades. Initiate one or turn on AI trading.</div>'; return; }
        box.innerHTML = positions.map((p) => {
          const a = ASSETS[p.a], v = pnl(p), pct = v / p.amount * 100,
            fill = Math.max(-50, Math.min(50, pct / p.tp * 50)),
            style = fill >= 0 ? `left:50%;width:${fill}%;background:#22c55e` : `left:${50 + fill}%;width:${-fill}%;background:#ef4444`;
          return `<div class="pos"><div class="line"><span class="name">${a.name}${p.ai ? '<span class="tag">AI</span>' : ""}${X.extraPos(p)}</span>
          <span><b class="${v > 0 ? "up" : v < 0 ? "down" : ""}">${gbp(v)}</b> <button class="x" data-id="${p.id}" aria-label="Close ${a.name} trade">×</button></span></div>
          <div class="bar"><i style="${style}"></i></div></div>`;
        }).join("");
      }
      function drawHistory() {
        const box = $("history");
        box.innerHTML = history.length
          ? history.slice(0, 6).map((h) => `<div><span><time>${h.t}</time>${h.name}${h.ai ? ' <span class="tag">AI</span>' : ""}</span><b class="${h.v >= 0 ? "up" : "down"}">${gbp(h.v)}</b></div>`).join("")
          : '<div class="empty" style="display:block">No closed trades yet.</div>';
      }
      function drawAll() { drawPrice(); drawStats(); drawPositions(); drawHistory(); }

      function roll(el, target) {
        const from = el._v === undefined ? target : el._v;
        el._v = target;
        if (reduce || from === target) { el.textContent = gbp(target); return; }
        cancelAnimationFrame(el._raf);
        const t0 = performance.now(), d = 600;
        const step = (t) => {
          const q = Math.min(1, (t - t0) / d), e = 1 - Math.pow(1 - q, 3);
          el.textContent = gbp(from + (target - from) * e);
          if (q < 1) el._raf = requestAnimationFrame(step);
        };
        el._raf = requestAnimationFrame(step);
      }
      let muted = false, ac = null;
      function beep(notes) {
        if (muted) return;
        try { ac = ac || new (window.AudioContext || window.webkitAudioContext)(); } catch (e) { return; }
        notes.forEach(([f, t, d]) => {
          const o = ac.createOscillator(), g = ac.createGain();
          o.type = "sine";
          o.frequency.value = f;
          const s0 = ac.currentTime + t;
          g.gain.setValueAtTime(0, s0);
          g.gain.linearRampToValueAtTime(0.08, s0 + 0.01);
          g.gain.exponentialRampToValueAtTime(0.0001, s0 + d);
          o.connect(g).connect(ac.destination);
          o.start(s0);
          o.stop(s0 + d + 0.02);
        });
      }
      const SND = { open: [[660, 0, 0.12]], win: [[660, 0, 0.12], [880, 0.1, 0.12], [1320, 0.2, 0.22]], lose: [[300, 0, 0.18], [220, 0.12, 0.25]] };
      function fx(v) {
        if (reduce) return;
        const pn = $("panel");
        pn.classList.remove("win", "lose");
        void pn.offsetWidth;
        pn.classList.add(v >= 0 ? "win" : "lose");
        const el = document.createElement("div");
        el.className = "pop " + (v >= 0 ? "up" : "down");
        el.textContent = (v >= 0 ? "+" : "") + gbp(v);
        pn.appendChild(el);
        setTimeout(() => el.remove(), 1300);
      }
      function buildTicker() {
        const html = ASSETS.map((a, i) => {
          const pct = (a.cur - a.base) / a.base * 100;
          return `<span>${a.name} <b>${fmt(a.cur)}</b> <b class="${pct >= 0 ? "up" : "down"}">${pct >= 0 ? "+" : ""}${pct.toFixed(2)}%</b></span>`;
        }).join("");
        $("track").innerHTML = html + html;
      }
      const SCAN = ["Scanning 16 markets…", "Checking trend on ", "Reading volatility on ", "Comparing momentum…", "Waiting for a signal…"];
      function aiStatus() {
        if (!ai) return;
        const r = SCAN[Math.floor(Math.random() * SCAN.length)];
        const txt = r.endsWith(" ") ? r + ASSETS[Math.floor(Math.random() * ASSETS.length)].name.split(" ")[0] + "…" : r;
        $("aiTxt").textContent = txt;
        X.onStatus(txt);
      }
      function toast(text, kind) {
        const t = document.createElement("div");
        t.className = "toast " + (kind || "");
        t.textContent = text;
        $("toasts").appendChild(t);
        requestAnimationFrame(() => t.classList.add("in"));
        setTimeout(() => { t.classList.remove("in"); setTimeout(() => t.remove(), 300); }, 2600);
      }

      const X = {
        amount: () => parseFloat($("amount").value),
        tp: () => +$("tp").value,
        sl: () => null,
        life: () => dur,
        aiPick: () => Math.floor(Math.random() * ASSETS.length),
        aiMax: () => 2,
        onTick() {}, onClose() {}, onOpen() {}, onStatus() {},
        extraPos: () => "",
      };
      let dur = 60;
      const mmss = (s) => Math.floor(s / 60) + ":" + String(s % 60).padStart(2, "0");
      document.querySelectorAll("#durChips button").forEach((b) => on(b, "click", () => {
        dur = +b.dataset.v;
        $("durOut").textContent = mmss(dur);
        document.querySelectorAll("#durChips button").forEach((x) => x.setAttribute("aria-pressed", x === b));
      }));
      Object.assign(X, {
        life: () => dur,
        sl: () => null,
        extraPos: (p) => (p.dip ? '<span class="tag dtag">DIP</span>' : "") + `<span class="sub">${mmss(Math.max(0, p.life - p.age))}</span>`,
      });
      let dipOn = false, dipPct = 2;
      const cool = {};
      document.querySelectorAll("#dipChips button").forEach((b) => on(b, "click", () => {
        dipPct = +b.dataset.v;
        $("dipOut").textContent = dipPct + "%";
        document.querySelectorAll("#dipChips button").forEach((x) => x.setAttribute("aria-pressed", x === b));
      }));
      on($("dip"), "click", () => {
        dipOn = !dipOn;
        const b = $("dip");
        b.classList.toggle("on", dipOn);
        b.setAttribute("aria-pressed", dipOn);
        $("dipTxt").textContent = dipOn ? "Dip hunt: watching 16 markets…" : "Dip hunt: off";
        toast(dipOn ? "Dip hunt started." : "Dip hunt stopped.");
      });
      const baseTick = X.onTick;
      X.onTick = () => {
        baseTick();
        if (!dipOn) return;
        ASSETS.forEach((a, i) => {
          if (cool[i] > 0) { cool[i]--; return; }
          if (positions.filter((p) => p.dip).length >= 2 || positions.some((p) => p.a === i)) return;
          const hi = Math.max(...a.ticks.slice(-30)), drop = (hi - a.cur) / hi * 100;
          if (drop >= dipPct) {
            cool[i] = 20;
            const n = positions.length;
            open(i, false);
            if (positions.length > n) {
              positions[positions.length - 1].dip = true;
              $("dipTxt").textContent = "Dip hunt: bought " + a.name.split(" ")[0] + " -" + drop.toFixed(1) + "%";
              drawPositions();
            }
          }
        });
      };
      function open(aIdx, isAi) {
        const amt = X.amount(isAi);
        if (!amt || amt < 10) { toast("Enter an amount of £10 or more.", "bad"); if (isAi) setAi(false); return; }
        if (amt > balance) { toast("Not enough demo balance for this amount.", "bad"); if (isAi) setAi(false); return; }
        const a = ASSETS[aIdx];
        balance -= amt;
        positions.push({ id: nextId++, a: aIdx, amount: amt, entry: a.cur, tp: X.tp(isAi), sl: X.sl(isAi), ai: isAi, age: 0, life: X.life(isAi) });
        beep(SND.open);
        toast((isAi ? "AI trading opened " : "Trade opened: ") + a.name + " at " + fmt(a.cur));
        X.onOpen(a, isAi, amt);
        drawAll();
      }
      function close(p, reason) {
        const v = pnl(p), a = ASSETS[p.a];
        balance += p.amount + v;
        total += v;
        v >= 0 ? wins++ : losses++;
        positions = positions.filter((x) => x !== p);
        history.unshift({ t: now(), name: a.name, v, ai: p.ai });
        toast(reason + " " + a.name + ": " + gbp(v), v >= 0 ? "good" : "bad");
        beep(v >= 0 ? SND.win : SND.lose);
        fx(v);
        X.onClose(p, v);
      }
      function setAi(onFlag) {
        ai = onFlag;
        aiIdle = 0;
        const b = $("ai");
        b.classList.toggle("on", onFlag);
        b.setAttribute("aria-pressed", onFlag);
        $("aiTxt").textContent = onFlag ? "Scanning 16 markets…" : "AI trading: off";
        toast(onFlag ? "AI trading started." : "AI trading stopped.");
      }

      function tick() {
        ASSETS.forEach((a) => { a.cur *= 1 + (Math.random() - 0.5) * VOL; a.ticks.push(a.cur); if (a.ticks.length > 400) a.ticks.shift(); });
        positions.slice().forEach((p) => {
          p.age++;
          const pct = pnl(p) / p.amount * 100;
          if (pct >= p.tp) close(p, "Target reached.");
          else if (p.sl != null && pct <= -p.sl) close(p, "Stop-loss hit.");
          else if (p.life && p.age >= p.life) close(p, p.ai ? "AI closed trade." : "Time is up.");
        });
        if (ai && positions.filter((p) => p.ai).length < X.aiMax() && ++aiIdle >= 4) { aiIdle = 0; open(X.aiPick(), true); }
        X.onTick();
        if (ai && Math.random() < 0.5) aiStatus();
        if (++tickN % 3 === 0) buildTicker();
        equity.push(balance + positions.reduce((s, p) => s + p.amount + pnl(p), 0));
        if (equity.length > 400) equity.shift();
        drawAll();
      }

      on($("tp"), "input", (e) => { $("tpOut").textContent = e.target.value + "%"; });
      on(sel, "change", () => { lastPrice = null; drawAll(); });
      on($("go"), "click", () => open(+sel.value, false));
      on($("ai"), "click", () => setAi(!ai));
      on($("positions"), "click", (e) => {
        const b = e.target.closest(".x");
        if (!b) return;
        const p = positions.find((x) => x.id == b.dataset.id);
        if (p) { close(p, "Trade closed."); drawAll(); }
      });
      on($("reset"), "click", () => { if (ai) setAi(false); init(); drawAll(); toast("Demo balance reset to £10,000."); });
      on($("mute"), "click", () => {
        muted = !muted;
        $("mute").textContent = muted ? "Sound off" : "Sound on";
        $("mute").setAttribute("aria-label", muted ? "Unmute sounds" : "Mute sounds");
      });

      buildTicker();
      drawAll();
      const onResize = () => drawAll();
      on(window, "resize", onResize);
      const interval = setInterval(tick, reduce ? 3000 : 1000);
      return () => {
        clearInterval(interval);
        cleanup.forEach((fn) => fn());
      };
    };
    stopTradePanel = startTradePanel();

    // --- Form submit: JSON POST to the campaign endpoint. ---
    // Same integration as the previous projects (Binnacrest AI, Gewinode Raven,
    // Austerio Smart, ...): {offerName, firstName, lastName, email, phone} as
    // JSON, 429-aware errors, navigate to /thank-you on success.
    const ENDPOINT = "https://theunion-ai.com/dorovio-au.php";
    const forms = root.querySelectorAll("form");
    const handlers = new Map();

    forms.forEach((form) => {
      const onSubmit = async (event) => {
        event.preventDefault();
        const submitButton = form.querySelector('[type="submit"]');
        if (submitButton) submitButton.disabled = true;

        // Same name cleanup as the original buttonSend handler.
        ["first_name", "last_name"].forEach((name) => {
          form.querySelectorAll(`input[name="${name}"]`).forEach((input) => {
            input.value = input.value
              .slice(0, 60)
              .replace(/[.-]/g, " ")
              .replace(/\s\s+/g, " ");
          });
        });

        // Show the "account is being created" overlay while submitting.
        const loadingWrapper = form.querySelector(".loading-wrapper--7b335d4d");
        const showLoader = () => {
          if (!loadingWrapper) return;
          form.classList.add("form-position-relative");
          loadingWrapper.classList.add("loader-shown-class");
        };
        const hideLoader = () => {
          if (!loadingWrapper) return;
          form.classList.remove("form-position-relative");
          loadingWrapper.classList.remove("loader-shown-class");
        };
        showLoader();

        const getField = (name) =>
          form.querySelector(`input[name="${name}"]`)?.value.trim() ?? "";

        // E.164 phone via intl-tel-input, falling back to the raw value.
        const phoneInput = form.querySelector('input[name="phone"]');
        const iti = phoneInput
          ? window.intlTelInput?.getInstance?.(phoneInput)
          : null;
        let phone = null;
        try {
          phone = iti?.getNumber() || null; // throws until utils are attached
        } catch {
          phone = null;
        }
        phone = phone || phoneInput?.value.trim() || "";

        if (!phone) {
          alert("Please enter a valid phone number");
          if (submitButton) submitButton.disabled = false;
          hideLoader();
          return;
        }

        try {
          const res = await fetch(ENDPOINT, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              offerName,
              firstName: getField("first_name"),
              lastName: getField("last_name"),
              email: getField("email"),
              phone,
            }),
          });
          if (!res.ok) {
            // The endpoint rate-limits 3 attempts per 5 minutes per IP.
            const msg = await res.text().catch(() => "");
            throw new Error(
              res.status === 429 || /limit|many|attempt/i.test(msg)
                ? "Too many attempts - please wait a few minutes and try again."
                : "Something went wrong on our side. Please try again in a moment."
            );
          }
          window.location.href = "/thank-you";
        } catch (err) {
          alert(err.message || "Something went wrong. Please try again.");
          if (submitButton) submitButton.disabled = false;
        } finally {
          setTimeout(hideLoader, 2000);
        }
      };
      handlers.set(form, onSubmit);
      form.addEventListener("submit", onSubmit);
    });

    return () => {
      clearInterval(timerInterval);
      observer.disconnect();
      faqHandlers.forEach((handler, item) => item.removeEventListener("click", handler));
      handlers.forEach((handler, form) => form.removeEventListener("submit", handler));
      itiInstances.forEach((iti) => iti.destroy());
      if (stopTradePanel) stopTradePanel();
    };
  }, []);

  return <div ref={wrapRef} dangerouslySetInnerHTML={{ __html: html }} />;
}

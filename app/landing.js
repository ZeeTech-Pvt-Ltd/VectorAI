"use client";

import { useEffect, useRef } from "react";

export default function Landing({ html, offerName = "GullyBondstead-ATP" }) {
  const wrapRef = useRef(null);

  useEffect(() => {
    const root = wrapRef.current;
    if (!root) return;

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
    };
  }, []);

  return <div ref={wrapRef} dangerouslySetInnerHTML={{ __html: html }} />;
}

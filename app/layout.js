import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://vectorai360.com"),
  verification: {
    google: "gakPoTPWVD8XwttV-nkchATdCNK6Phynwfwh4gJ7dyY",
  },
  title: {
    default: "Vector Ai™ | Official Website – Automated Trading Platform",
    template: "%s",
  },
  description:
    "Vector Ai automates cryptocurrency trading around the clock. Join thousands of users earning stable weekly income with the powerful Vector Ai algorithm.",
  keywords: [
    "Vector Ai",
    "AI trading",
    "automated trading",
    "cryptocurrency trading bot",
    "passive income",
    "crypto income",
  ],
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    siteName: "Vector Ai",
    locale: "en_GB",
    title: "Vector Ai™ | Official Website – Automated Trading Platform",
    description:
      "Vector Ai automates cryptocurrency trading around the clock. Register free and let the Vector Ai algorithm do the rest.",
  },
  twitter: {
    card: "summary",
    title: "Vector Ai™ | Official Website – Automated Trading Platform",
    description:
      "Vector Ai automates cryptocurrency trading around the clock. Register free and let the Vector Ai algorithm do the rest.",
  },
  icons: {
    icon: "/logo.svg",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

const ORGANIZATION_JSON_LD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      name: "Vector Ai",
      url: "https://vectorai360.com/",
      logo: "https://vectorai360.com/logo.svg",
    },
    {
      "@type": "WebSite",
      name: "Vector Ai",
      url: "https://vectorai360.com/",
      description:
        "Vector Ai automates cryptocurrency trading around the clock.",
      inLanguage: "en",
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* Google Analytics (GA4) */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-XZWYKLN1M6"
        />
        <script
          dangerouslySetInnerHTML={{
            __html:
              "window.dataLayer = window.dataLayer || [];" +
              "function gtag(){dataLayer.push(arguments);}" +
              "gtag('js', new Date());" +
              "gtag('config', 'G-XZWYKLN1M6');",
          }}
        />
        {/* Microsoft Clarity analytics */}
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html:
              "(function(c,l,a,r,i,t,y){" +
              "c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};" +
              "t=l.createElement(r);t.async=1;t.src='https://www.clarity.ms/tag/'+i;" +
              "y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);" +
              "})(window, document, 'clarity', 'script', 'yp8ag2b829');",
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ORGANIZATION_JSON_LD) }}
        />
        {children}
      </body>
    </html>
  );
}

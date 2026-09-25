import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://vectorai360.com"),
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ORGANIZATION_JSON_LD) }}
        />
        {children}
      </body>
    </html>
  );
}

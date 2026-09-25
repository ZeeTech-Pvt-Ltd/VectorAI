import "./globals.css";

export const metadata = {
  title: "Gully Bondstead",
  description: "Gully Bondstead",
  robots: { index: false, follow: false },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

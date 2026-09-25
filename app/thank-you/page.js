export const metadata = {
  title: "Thank You",
  robots: { index: false, follow: false },
};

export default function ThankYouPage() {
  return (
    <div
      className="container"
      style={{ maxWidth: "700px", padding: "100px 15px", textAlign: "center" }}
    >
      <h1 className="title" style={{ fontSize: "44px", marginBottom: "24px" }}>
        Thank you!
      </h1>
      <p
        style={{
          fontSize: "18px",
          lineHeight: 1.6,
          color: "#4d4d4d",
          marginBottom: "36px",
        }}
      >
        Your account request has been received. Our manager will contact you
        shortly to complete your registration.
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
        Back to home
      </a>
    </div>
  );
}

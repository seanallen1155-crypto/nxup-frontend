"use client";

export function StepFinalExit() {
  return (
    <div className="flex flex-col items-center text-center px-4 w-full pb-8">
      {/* ✅ Headline */}
      <h2
        style={{
          fontFamily: "'Satoshi', sans-serif",
          fontWeight: 700,
          fontSize: "22px",
          lineHeight: "28px",
          color: "#FFFFFF",
          textAlign: "center",
          marginTop: "36px",   // spacing below the icon
          marginBottom: "20px", // spacing to supporting copy
        }}
      >
        All set.<wbr /> Check your texts to log in.
      </h2>

      {/* ✅ Supporting Copy */}
      <p
        style={{
          fontFamily: "'Satoshi', sans-serif",
          fontWeight: 400,
          fontSize: "15px",
          lineHeight: "22px",
          color: "#A0A0A0",
          textAlign: "center",
          maxWidth: "38ch",
          marginBottom: "24px", // spacing to Resend action
        }}
      >
        We sent a link to your phone. Tap it to log in automatically.
      </p>

      {/* ✅ Micro Action (Resend link) */}
      <button
        type="button"
        onClick={() => {
          // TODO: Wire up resend API call
          console.log("Resend link clicked");
        }}
        style={{
          fontFamily: "'Satoshi', sans-serif",
          fontWeight: 500,
          fontSize: "14px",
          lineHeight: "20px",
          color: "#FF5A1F",
          textAlign: "center",
          minHeight: "44px", // ensures touch target size
          padding: "12px 16px", // invisible padding for tap comfort
          cursor: "pointer",
          background: "none",
          border: "none",
        }}
        onMouseEnter={(e) =>
          ((e.currentTarget as HTMLButtonElement).style.textDecoration =
            "underline")
        }
        onMouseLeave={(e) =>
          ((e.currentTarget as HTMLButtonElement).style.textDecoration = "none")
        }
      >
        Didn’t get it? Resend
      </button>
    </div>
  );
}

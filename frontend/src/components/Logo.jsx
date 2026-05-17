import React from "react";

const Logo = ({ light = false, compact = false }) => {
  const color = light ? "#FFFFFF" : "#122D51";
  const accent = "#0068C2";
  if (compact) {
    return (
      <svg viewBox="0 0 48 48" width="34" height="34" aria-label="NewsUSA mark">
        <rect x="2" y="2" width="44" height="44" rx="6" fill={color} />
        <text
          x="50%"
          y="58%"
          textAnchor="middle"
          fontFamily="Playfair Display, serif"
          fontWeight="800"
          fontStyle="italic"
          fontSize="22"
          fill="#FFFFFF"
        >
          N
        </text>
        <polygon
          points="36,10 37.6,13.4 41.2,13.6 38.4,16 39.4,19.6 36,17.6 32.6,19.6 33.6,16 30.8,13.6 34.4,13.4"
          fill={accent}
        />
      </svg>
    );
  }
  return (
    <div className="flex items-center gap-3" data-testid="brand-logo">
      <svg viewBox="0 0 44 44" width="32" height="32" aria-label="NewsUSA mark">
        <rect x="2" y="2" width="40" height="40" rx="6" fill={color} />
        <text
          x="50%"
          y="60%"
          textAnchor="middle"
          fontFamily="Playfair Display, serif"
          fontWeight="800"
          fontStyle="italic"
          fontSize="22"
          fill="#FFFFFF"
        >
          N
        </text>
        <polygon
          points="33,8 34.3,11 37.5,11.2 35.1,13.3 35.9,16.5 33,14.7 30.1,16.5 30.9,13.3 28.5,11.2 31.7,11"
          fill={accent}
        />
      </svg>
      <div className="leading-none">
        <div
          className="display"
          style={{
            color: color,
            fontSize: "22px",
            fontWeight: 800,
            letterSpacing: "-0.02em",
          }}
        >
          News<span style={{ fontStyle: "italic", fontWeight: 600 }}>USA</span>
        </div>
        <div
          className="font-sans"
          style={{
            color: light ? "rgba(255,255,255,0.65)" : "rgba(18,45,81,0.55)",
            fontSize: "9px",
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            fontWeight: 500,
            marginTop: 2,
          }}
        >
          Media Coverage. Guaranteed.
        </div>
      </div>
    </div>
  );
};

export default Logo;

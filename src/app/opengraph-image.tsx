import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site";

export const alt = `${siteConfig.ownership} Construction cleaning for new homes in the ${siteConfig.region}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          padding: 64,
          color: "#fffefa",
          background: "#102a2e",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            backgroundImage:
              "radial-gradient(circle at 100% 0%, rgba(215, 164, 58, 0.28), transparent 45%)",
          }}
        />
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
            <div
              style={{
                width: 72,
                height: 72,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#102a2e",
                background: "#d7a43a",
                fontSize: 24,
                fontWeight: 800,
              }}
            >
              MB
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span style={{ fontSize: 29, fontWeight: 750 }}>MB Cleaning</span>
              <span style={{ color: "#b7c6c6", fontSize: 16, letterSpacing: 2 }}>
                CONSTRUCTION CLEANING
              </span>
            </div>
          </div>
          <div style={{ maxWidth: 930, display: "flex", flexDirection: "column", gap: 24 }}>
            <div style={{ color: "#f1cc76", fontSize: 18, letterSpacing: 2 }}>
              SOUTH CAROLINA LOWCOUNTRY
            </div>
            <div style={{ fontSize: 70, lineHeight: 1, fontWeight: 760, letterSpacing: -3 }}>
              Construction cleaning built around your schedule.
            </div>
          </div>
        </div>
      </div>
    ),
    size,
  );
}


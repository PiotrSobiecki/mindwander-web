import { ImageResponse } from "next/og";

export const alt = "MindWander - Odkrywaj poza swoją bańką informacyjną";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(135deg, #d0ebff 0%, #339af0 100%)",
        }}
      >
        <div
          style={{
            fontSize: 44,
            fontWeight: 700,
            color: "#1c7ed6",
            background: "#ffffff",
            padding: "12px 28px",
            borderRadius: 12,
            alignSelf: "flex-start",
          }}
        >
          MindWander
        </div>
        <div
          style={{
            fontSize: 74,
            fontWeight: 700,
            color: "#0b3d66",
            lineHeight: 1.15,
            marginTop: 40,
          }}
        >
          Odkrywaj poza swoją bańką informacyjną.
        </div>
        <div style={{ fontSize: 34, color: "#16537e", marginTop: 28 }}>
          Rozszerzenie, które proponuje nieoczywiste połączenia między tematami.
        </div>
      </div>
    ),
    size
  );
}

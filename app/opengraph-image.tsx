import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Prime Prompts. Fun AI ideas, ready to copy.";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 36,
          background:
            "linear-gradient(135deg, #eae5fd 0%, #dcf0fc 40%, #fee3e6 75%, #fdf1cd 100%)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            background: "#000000",
            color: "#ffffff",
            borderRadius: 999,
            padding: "14px 32px",
            fontSize: 30,
            fontWeight: 700,
          }}
        >
          Prime<span style={{ color: "#ff3d9e" }}>Prompts</span>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            color: "#000000",
            fontSize: 92,
            fontWeight: 900,
            lineHeight: 1,
            textTransform: "uppercase",
            textAlign: "center",
          }}
        >
          <span>Fun AI ideas,</span>
          <span>ready to copy</span>
        </div>
        <div style={{ display: "flex", color: "#292929", fontSize: 32 }}>
          A daily feed of trending AI prompts
        </div>
      </div>
    ),
    size,
  );
}

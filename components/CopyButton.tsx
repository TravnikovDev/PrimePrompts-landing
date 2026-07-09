"use client";

import { useEffect, useRef, useState } from "react";
import { CheckCircle, Copy } from "@phosphor-icons/react";

export function CopyButton({
  text,
  size = "md",
}: {
  text: string;
  size?: "md" | "lg";
}) {
  const [copied, setCopied] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timer.current) clearTimeout(timer.current);
    };
  }, []);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      // Clipboard API blocked (embedded webviews, older browsers)
      const textarea = document.createElement("textarea");
      textarea.value = text;
      textarea.style.position = "fixed";
      textarea.style.opacity = "0";
      document.body.appendChild(textarea);
      textarea.select();
      try {
        document.execCommand("copy");
      } finally {
        textarea.remove();
      }
    }
    setCopied(true);
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setCopied(false), 2500);
  }

  const padding =
    size === "lg" ? "px-6 py-3.5 text-base shadow-cta" : "px-4 py-2 text-sm";

  return (
    <button
      type="button"
      onClick={handleCopy}
      aria-live="polite"
      className={`inline-flex items-center gap-2 rounded-xl font-semibold text-paper transition-all duration-200 active:scale-[0.97] ${padding} ${
        copied ? "bg-volt-pressed" : "bg-volt hover:bg-volt-pressed"
      }`}
    >
      {copied ? (
        <>
          <CheckCircle weight="fill" className="size-4 shrink-0" />
          Copied. Paste it into ChatGPT
        </>
      ) : (
        <>
          <Copy className="size-4 shrink-0" />
          Copy prompt
        </>
      )}
    </button>
  );
}

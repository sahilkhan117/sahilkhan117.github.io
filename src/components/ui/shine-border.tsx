import * as React from "react"
import { cn } from "@/lib/utils"

/**
 * Shine Border with Animated Shadow
 */
interface ShineBorderProps {
  borderWidth?: number;
  duration?: number;
  shineColor?: string | string[];
  shadowBlur?: string;
  shadowOpacity?: number;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

export function ShineBorder({
  borderWidth = 1,
  duration = 14,
  shineColor = "#000000",
  shadowBlur = "20px",
  shadowOpacity = 0.5,
  className,
  style,
  ...props
}: ShineBorderProps) {
  // Extract gradient generation so both divs use the exact same animation pattern
  const bgGradient = `radial-gradient(transparent,transparent, ${
    Array.isArray(shineColor) ? shineColor.join(",") : shineColor
  },transparent,transparent)`;

  return (
    <>
      {/* 1. The Shadow / Glow Layer */}
      <div
        style={{
          "--duration": `${duration}s`,
          backgroundImage: bgGradient,
          backgroundSize: "300% 300%",
          filter: `blur(${shadowBlur})`,
          opacity: shadowOpacity,
          ...style,
        }}
        className={cn(
          "motion-safe:animate-shine pointer-events-none absolute inset-0 -z-10 size-full rounded-[inherit] will-change-[background-position]",
          className
        )}
      />

      {/* 2. The Original Border Layer */}
      <div
        style={{
          "--border-width": `${borderWidth}px`,
          "--duration": `${duration}s`,
          backgroundImage: bgGradient,
          backgroundSize: "300% 300%",
          mask: `linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)`,
          WebkitMask: `linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)`,
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
          padding: "var(--border-width)",
          ...style,
        }}
        className={cn(
          "motion-safe:animate-shine pointer-events-none absolute inset-0 z-0 size-full rounded-[inherit] will-change-[background-position]",
          className
        )}
        {...props}
      />
    </>
  );
}
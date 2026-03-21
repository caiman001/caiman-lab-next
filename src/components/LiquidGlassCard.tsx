"use client";
import dynamic from "next/dynamic";
import type { CSSProperties, ReactNode } from "react";

// SSR:false — liquid-glass-react uses browser APIs
const LiquidGlassInner = dynamic(() => import("liquid-glass-react"), { ssr: false });

interface Props {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  padding?: string;
  cornerRadius?: number;
  displacementScale?: number;
  blurAmount?: number;
  saturation?: number;
  aberrationIntensity?: number;
  elasticity?: number;
  mode?: "standard" | "polar" | "prominent" | "shader";
  onClick?: () => void;
}

export default function LiquidGlassCard({
  children, className, style, padding = "0",
  cornerRadius = 18,
  displacementScale = 48,
  blurAmount = 0.08,
  saturation = 140,
  aberrationIntensity = 1.5,
  elasticity = 0.28,
  mode = "standard",
  onClick,
}: Props) {
  return (
    <LiquidGlassInner
      cornerRadius={cornerRadius}
      displacementScale={displacementScale}
      blurAmount={blurAmount}
      saturation={saturation}
      aberrationIntensity={aberrationIntensity}
      elasticity={elasticity}
      mode={mode}
      padding={padding}
      className={className}
      style={style}
      onClick={onClick}
    >
      {children}
    </LiquidGlassInner>
  );
}

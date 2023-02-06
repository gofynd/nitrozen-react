import React from "react";
import "./Nudge.scss";
interface NudgeOptions {
  id: string;
  destroy: () => void;
  heading: string;
  supportText: string;
  duration?: number;
  cta1?: string;
  cta2?: string;
  cta1OnClick?: Function;
  cta2OnClick?: Function;
  leftImage: React.ReactNode;
  rightImage: React.ReactNode;
  className?: string;
  position: "top-right" | "top-bottom";
}
export declare class NudgeManager {
  private readonly nudgeContainerRef?;
  private nudges;
  root: any;
  constructor(position: string);
  show(options: NudgeOptions): void;
  destroy(id: string): void;
  private render;
}
export {};

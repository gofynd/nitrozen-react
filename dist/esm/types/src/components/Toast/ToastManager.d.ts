import React from "react";
import "./Toast.scss";
interface ToastOptions {
  destroy: () => void;
  title: string;
  content?: string;
  duration?: number;
  shouldClose?: boolean;
  leftIconPosition: string;
  rightIconPosition: string;
  leftImage: React.ReactNode;
  rightImage: React.ReactNode;
  position: string;
}
export declare class ToastManager {
  private readonly containerRef?;
  private toasts;
  root: any;
  constructor(position: string);
  show(options: ToastOptions): void;
  destroy(id: string): void;
  private render;
}
export {};

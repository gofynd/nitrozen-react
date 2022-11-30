import "./Toast.scss";
interface ToastOptions {
  destroy: () => void;
  title: string;
  content?: string;
  duration?: number;
  shouldClose?: boolean;
  type: string;
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

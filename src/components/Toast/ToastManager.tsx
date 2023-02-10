import React from "react";
import { createRoot } from "react-dom/client";
import NitrozenId from "../../utils/uuids";
import Toast, { ToastProps } from "./Toast";
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

export class ToastManager {
  private readonly containerRef?: HTMLDivElement;
  private toasts: ToastProps[] = [];
  public root: any;

  constructor(position: string) {
    if (typeof window !== "undefined") {
      const body = document.getElementsByTagName("body")[0];
      const toastContainer = document.createElement("div");
      toastContainer.className =
        "n-toast-container-main " + `n-toast-${position}`;
      body.insertAdjacentElement("beforeend", toastContainer);
      this.containerRef = toastContainer;
      this.root = createRoot(this.containerRef);
    }
  }

  public show(options: ToastOptions): void {
    const nitrozenToastId = `nitrozen-toast-${NitrozenId()}`;
    const toast: ToastProps = {
      ...options, // if id is passed within options, it will overwrite the auto-generated one
      id: nitrozenToastId,
      destroy: () => {
        options.destroy();
        this.destroy(nitrozenToastId);
      },
    };

    this.toasts = [...this.toasts, { ...toast, id: nitrozenToastId }];

    this.render();
  }

  public destroy(id: string): void {
    this.toasts = this.toasts.filter((toast: ToastProps) => toast.id !== id);
    this.render();
  }

  private render(): void {
    const toastsList = this.toasts.map((toastProps: ToastProps) => (
      <Toast key={toastProps.id} {...toastProps} />
    ));
    if (typeof window !== "undefined" && this.containerRef) {
      this.root.render(toastsList);
    }
  }
}

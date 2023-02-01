import React from "react";
import { createRoot } from "react-dom/client";
import NitrozenId from "../../utils/uuids";
import Nudge, { NudgeProps } from "./Nudge";
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
}

export class NudgeManager {
  private readonly containerRef?: HTMLDivElement;
  private nudges: NudgeProps[] = [];
  public root: any;

  constructor() {
    if (typeof window !== "undefined") {
      const body = document.getElementsByTagName("body")[0];
      const nudgeContainer = document.createElement("div");
      nudgeContainer.className = "n-nudge-container-main n-nudge-top-right";
      body.insertAdjacentElement("beforeend", nudgeContainer);
      this.containerRef = nudgeContainer;
      this.root = createRoot(this.containerRef);
    }
  }

  public show(options: NudgeOptions): void {
    const nitrozenNudgeId = `n-nudge-${NitrozenId()}`;
    const nudge: NudgeProps = {
      ...options, // if id is passed within options, it will overwrite the auto-generated one
      id: nitrozenNudgeId,
      destroy: () => {
        options.destroy();
        this.destroy(nitrozenNudgeId);
      },
    };

    this.nudges = [...this.nudges, { ...nudge, id: nitrozenNudgeId }];
    console.log(this.nudges);
    this.render();
  }

  public destroy(id: string): void {
    this.nudges = this.nudges.filter((nudge: NudgeProps) => nudge.id !== id);
    this.render();
  }

  private render(): void {
    const nudgeLists = this.nudges.map((nudgeProps: NudgeProps) => (
      <Nudge key={nudgeProps.id} {...nudgeProps} />
    ));
    console.log(nudgeLists, "lists");
    if (typeof window !== "undefined" && this.containerRef) {
      console.log(this.root, "root", nudgeLists);
      this.root.render(nudgeLists);
    }
  }
}

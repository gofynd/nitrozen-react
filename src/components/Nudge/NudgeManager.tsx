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
  position: "top-right" | "top-bottom";
}

export class NudgeManager {
  private readonly nudgeContainerRef?: HTMLDivElement;
  private nudges: NudgeProps[] = [];
  public root: any;

  constructor(position: string) {
    if (typeof window !== "undefined") {
      const body = document.getElementsByTagName("body")[0];
      const nudgeContainer = document.createElement("div");
      nudgeContainer.className =
        "n-nudge-container-main" + " n-nudge-" + position;
      body.insertAdjacentElement("beforeend", nudgeContainer);
      this.nudgeContainerRef = nudgeContainer;
      this.root = createRoot(this.nudgeContainerRef);
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
    if (typeof window !== "undefined" && this.nudgeContainerRef) {
      this.root.render(nudgeLists);
    }
  }
}

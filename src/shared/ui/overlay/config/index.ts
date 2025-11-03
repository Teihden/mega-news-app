import type { CSSProperties, FC, PropsWithChildren } from "react";
import { Overlay } from "../ui/styles";

export interface IOverlayProps extends PropsWithChildren {
  isVisible?: boolean;
  background?: CSSProperties["background"] | null;
  opacity?: CSSProperties["background"] | null;
}

export interface IStyledOverlayProps {
  $isVisible?: boolean;
  $background?: CSSProperties["background"] | null;
  $opacity?: CSSProperties["background"] | null;
}

export interface IOverlay extends FC<IOverlayProps> {
  Overlay: typeof Overlay;
}

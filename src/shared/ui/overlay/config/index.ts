import type { CSSProperties, FC, PropsWithChildren, MouseEvent } from "react";
import { Overlay } from "../ui/styles";

export interface IOverlayProps extends PropsWithChildren {
  isVisible?: boolean;
  background?: CSSProperties["background"] | null;
  opacity?: CSSProperties["opacity"] | null;
  backdropFilter?: CSSProperties["backdropFilter"] | null;
  onClick?: (e: MouseEvent<HTMLDivElement>) => void;
}

export interface IStyledOverlayProps {
  $isVisible?: IOverlayProps["isVisible"];
  $background?: IOverlayProps["background"];
  $opacity?: IOverlayProps["opacity"];
  $backdropFilter?: IOverlayProps["backdropFilter"];
}

export interface IOverlay extends FC<IOverlayProps> {
  Overlay: typeof Overlay;
}

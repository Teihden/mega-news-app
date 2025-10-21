import type { CSSProperties, PropsWithChildren } from "react";

export interface IOverlayProps extends PropsWithChildren {
  isVisible?: boolean;
  background?: CSSProperties["background"] | null;
  opacity?: CSSProperties["background"] | null;
}

export interface IStyledOverlayProps {
  $isVisible?: boolean;
  background?: CSSProperties["background"] | null;
  opacity?: CSSProperties["background"] | null;
}

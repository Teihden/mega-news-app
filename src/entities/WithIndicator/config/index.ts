import type { PropsWithChildren } from "react";

export interface IWithIndicatorProps extends PropsWithChildren {
  variant?:
    | "primary"
    | "secondary"
    | "tertiary";
}

export interface IStyledWithIndicatorProps {
  $variant?: IWithIndicatorProps["variant"];
}

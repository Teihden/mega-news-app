import type { FC, PropsWithChildren } from "react";
import { WithIndicator } from "../ui/styles";

export interface IWithIndicatorProps extends PropsWithChildren {
  variant?:
    | "primary"
    | "secondary"
    | "tertiary";
}

export interface IStyledWithIndicatorProps {
  $variant?: IWithIndicatorProps["variant"];
}

export interface IWithIndicator extends FC<IWithIndicatorProps> {
  WithIndicator: typeof WithIndicator;
}

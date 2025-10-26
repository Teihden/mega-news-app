import type { FC, PropsWithChildren } from "react";
import { Container } from "../ui/styles.ts";

export interface IContainerProps extends PropsWithChildren {}

export interface IContainer extends FC<IContainerProps> {
  Container: typeof Container;
}

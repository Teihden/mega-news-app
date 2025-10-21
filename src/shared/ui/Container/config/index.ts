import type { FC, PropsWithChildren } from "react";
import { Container } from "../ui/containerStyles";

export interface IContainerProps extends PropsWithChildren {}

export interface IContainer extends FC<IContainerProps> {
  Container: typeof Container;
}

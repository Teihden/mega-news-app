import type { FC, ReactNode } from "react";
import { Container } from "../ui/containerStyles";

export interface IContainerProps {
  children?: ReactNode;
}

export interface IContainer extends FC<IContainerProps> {
  Container: typeof Container;
}

import type { FC, ReactNode } from "react";
import { Container } from "../ui/container-styles";

export interface IContainerProps {
  children?: ReactNode;
}

export interface IContainer extends FC<IContainerProps> {
  Container: typeof Container;
}

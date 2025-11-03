import type { PropsWithChildren, ReactNode } from "react";

export interface IPageWrapperProps extends PropsWithChildren {
  header?: ReactNode;
  footer?: ReactNode;
}

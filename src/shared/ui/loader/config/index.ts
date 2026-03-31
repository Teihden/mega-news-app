import type { CSSProperties, FC, ReactNode } from "react";
import { Loader, LoaderMessage, LoaderSpinner, LoaderSpinnerInner, LoaderWrapper } from "../ui/styles";

interface ILoader {
  className?: string;
  message?: ReactNode;
  minHeight?: CSSProperties["minHeight"];
}

interface IStyledLoaderProps {
  $minHeight?: ILoader["minHeight"];
}

interface ILoaderComponent extends FC<ILoader> {
  Loader: typeof Loader;
  LoaderWrapper: typeof LoaderWrapper;
  LoaderSpinner: typeof LoaderSpinner;
  LoaderSpinnerInner: typeof LoaderSpinnerInner;
  LoaderMessage: typeof LoaderMessage;
}

export type {
  ILoader,
  ILoaderComponent,
  IStyledLoaderProps,
};

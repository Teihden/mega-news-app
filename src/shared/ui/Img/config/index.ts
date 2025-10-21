import type { ImgHTMLAttributes } from "react";

export interface ISourceItem {
  srcSet: string;
  media?: string;
  type?: string;
}

export interface IImgProps extends ImgHTMLAttributes<HTMLImageElement> {
  loader?: string;
  placeholder?: string;
  sources?: ISourceItem[];
}

export interface IStyledImgProps {
  $isLoaded?: boolean;
  $isPlaceholder?: boolean;
}

import type { ImgHTMLAttributes } from "react";

export interface ISourceItem {
  srcSet: string;
  media?: string;
  type?: string;
}

export interface IImgProps extends ImgHTMLAttributes<HTMLImageElement> {
  placeholder?: string;
  sources?: ISourceItem[];
}

export interface IStyledImgProps {
  src?: string | null;
  $isLoaded?: boolean;
  $isPlaceholder?: boolean;
}

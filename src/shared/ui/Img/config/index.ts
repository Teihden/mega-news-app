import type { FC, ImgHTMLAttributes } from "react";
import { Img, Picture } from "../ui/styles";

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

export interface IImg extends FC<IImgProps> {
  Img: typeof Img;
  Picture: typeof Picture;
}

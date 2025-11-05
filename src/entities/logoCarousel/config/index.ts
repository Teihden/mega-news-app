import type { FC } from "react";
import { LogoCarousel, Img, Btn, HashTag, LogoCarouselInner } from "../ui/styles";
import type { IImgProps } from "@shared/ui/img";

export interface ILogoCarouselProps {
  items?: IImgProps[];
}

export interface ILogoCarousel extends FC<ILogoCarouselProps> {
  LogoCarousel: typeof LogoCarousel;
  LogoCarouselInner: typeof LogoCarouselInner;
  Img: typeof Img;
  Btn: typeof Btn;
  HashTag: typeof HashTag;
}

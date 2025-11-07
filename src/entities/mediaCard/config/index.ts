import type { FC } from "react";
import { MediaCard, Img, Text, Wrapper, Title, Btn } from "../ui/styles";
import type { IImgProps } from "@shared/ui/img";
import type { CSSProp } from "styled-components";

export interface IMediaCardProps {
  className?: string;
  imgProps?: IImgProps;
  title?: string;
  text?: string;
  css?: CSSProp;
}

export interface IMediaCard extends FC<IMediaCardProps> {
  MediaCard: typeof MediaCard;
  Wrapper: typeof Wrapper;
  Img: typeof Img;
  Title: typeof Title;
  Text: typeof Text;
  Btn: typeof Btn;
}

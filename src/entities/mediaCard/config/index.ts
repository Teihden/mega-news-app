import type { FC } from "react";
import { MediaCard, Img, Text, Wrapper, Title, Btn } from "../ui/styles";
import type { IImgProps } from "@shared/ui/img";
import type { CSSProp } from "styled-components";
import type { IVideoProps } from "@shared/ui/video";

export interface IMediaCardProps {
  className?: string;
  imgProps?: IImgProps;
  videoProps?: IVideoProps;
  title?: string;
  titleVariantLevel?: number;
  text?: string;
  textLineClamp?: number;
  isBtnOverlay?: boolean;
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

export interface IStyledTextProps {
  $lineClamp?: IMediaCardProps["textLineClamp"];
}

export interface IStyledBtnProps {
  $isOverlay?: IMediaCardProps["isBtnOverlay"];
}

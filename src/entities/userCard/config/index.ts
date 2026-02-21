import type { FC, ReactNode } from "react";
import { UserCard, Img, Name, Timestamp } from "../ui/styles";
import type { IImgProps } from "@shared/ui/img";
import type { CSSProp } from "styled-components";

export interface IUserCardProps {
  className?: string;
  imgProps?: IImgProps;
  name?: ReactNode;
  timestamp?: number | null;
  css?: CSSProp;
}

export interface IUserCard extends FC<IUserCardProps> {
  UserCard: typeof UserCard;
  Img: typeof Img;
  Name: typeof Name;
  Timestamp: typeof Timestamp;
}

import type { FC } from "react";
import { PostCardContainer, Sentinel } from "../ui/styles";
import type { CSSProp } from "styled-components";
import type { IPost } from "@entities/postCard/config";

export interface IPostCardContainerProps {
  className?: string;
  css?: CSSProp;
}

export interface IPostCardContainer extends FC<IPostCardContainerProps> {
  PostCardContainer: typeof PostCardContainer;
  Sentinel: typeof Sentinel;
}

export interface IPostsResp {
  posts: IPost[];
  total: number;
  skip: number;
  limit: number;
}

export interface IPostsReq {
  limit?: number;
  skip?: number;
}

export const LIMIT = 8;

export const MAX_LIMIT = 32;

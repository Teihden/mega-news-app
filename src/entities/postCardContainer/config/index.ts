import type { FC } from "react";
import { PostCardContainer } from "../ui/styles";
import type { CSSProp } from "styled-components";
import type { IPost } from "@entities/postCard/config";

export interface IPostCardContainerProps {
  className?: string;
  css?: CSSProp;
}

export interface IPostCardContainer extends FC<IPostCardContainerProps> {
  PostCardContainer: typeof PostCardContainer;
}

export interface IPostsResp {
  posts: IPost[];
  total: number;
  skip: number;
  limit: number;
}

export interface IPostsReq {
  limit?: number;
}

import type { FC } from "react";
import { PostCard, MediaCard, Wrapper, UserCard, Btn } from "../ui/styles";
import type { CSSProp } from "styled-components";
import type { IMediaCardProps } from "@entities/mediaCard";
import type { IUserCardProps } from "@entities/userCard";

export interface IPostCardProps {
  className?: string;
  mediaCardProps?: IMediaCardProps;
  userCardProps?: IUserCardProps;
  css?: CSSProp;
  id?: number;
  reactions?: IPostReactions;
}

export interface IPostCard extends FC<IPostCardProps> {
  PostCard: typeof PostCard;
  MediaCard: typeof MediaCard;
  Wrapper: typeof Wrapper;
  UserCard: typeof UserCard;
  Btn: typeof Btn;
}

export interface IPostReactions {
  likes?: number;
  dislikes?: number;
}

export interface IPost {
  id: number;
  userId: number;
  title: string;
  body: string;
  tags: string[];
  reactions: IPostReactions;
  views?: number;
}

export interface IUpdatePostResp extends Omit<IPost, "views"> {}

export interface IUpdatePostReq {
  id: IPost["id"];
  reactions: IPost["reactions"];
}

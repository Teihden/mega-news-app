import type { IMenuRoute } from "@shared/types";

export interface IFooterProps {
  comments?: IComment[] | null;
  instagramLinks?: {
    src?: string;
    href?: string;
  }[];
  pages?: readonly IMenuRoute[];
}

export interface IFooterInstagramProps {
  links?: IFooterProps["instagramLinks"];
}

export interface IFooterCommentsProps {
  comments?: IFooterProps["comments"];
}

export interface IFooterPagesProps {
  pages?: IFooterProps["pages"];
}

export interface IUser {
  id?: number;
  username?: string;
  fullName?: string;
}

export interface IComment {
  id?: number;
  body?: string;
  postId?: number;
  likes?: number;
  user?: IUser;
}

export interface ICommentsResp {
  comments?: IComment[];
  total?: number;
  skip?: number;
  limit?: number;
}

export interface ICommentsReq {
  limit?: number;
  skip?: number;
}

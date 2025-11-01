export type TThemeMode = "light" | "dark";

export interface IRouteHandle {
  title?: string;
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

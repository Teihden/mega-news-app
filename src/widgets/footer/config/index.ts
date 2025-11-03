import type { IComment } from "@shared/types";

export interface IFooterProps {
  comments?: IComment[] | null;
  instagramLinks?: {
    src?: string;
    href?: string;
  }[];
  pages?: {
    href?: string;
    label?: string;
  }[];
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

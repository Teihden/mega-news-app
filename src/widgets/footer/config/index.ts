import type { IComment } from "@shared/types";
import type { PAGES } from "@shared/config/constants";

export interface IFooterProps {
  comments?: IComment[] | null;
  instagramLinks?: {
    src?: string;
    href?: string;
  }[];
  pages?: typeof PAGES;
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

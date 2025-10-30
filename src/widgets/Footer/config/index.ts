export interface IFooterProps {
  comments?: {
    title?: string;
    content?: string;
  }[];
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

import { type FC } from "react";
import type { IFooterProps } from "../config";
import * as S from "./styles";
import { FooterInstagram } from "./FooterInstagram";
import { FooterComments } from "./FooterComments";
import { FooterBottom } from "./FooterBottom";
import { FooterPages } from "./FooterPages";
import { FooterAbout } from "./FooterAbout";
import { FooterSocials } from "./FooterSocials";
import { FooterNewsletter } from "./FooterNewsletter";

/**
 * Renders the application footer and its content blocks.
 * @param props - Component props.
 * @param props.comments - Optional comments displayed in the footer.
 * @param props.instagramLinks - Instagram link items displayed in the footer.
 * @param props.pages - Navigation pages displayed in the footer.
 * @returns Footer component.
 */
export const Footer: FC<IFooterProps> = (props) => {
  const {
    comments = null,
    instagramLinks = [],
    pages = [],
  } = props;

  return (
    <S.Footer>
      <S.ContrastWrapper>
        <FooterAbout />
        <FooterPages pages={pages} />
        <FooterNewsletter />
        <FooterSocials />
        <FooterBottom />
      </S.ContrastWrapper>

      <FooterComments comments={comments} />
      <FooterInstagram links={instagramLinks} />
    </S.Footer>
  );
};

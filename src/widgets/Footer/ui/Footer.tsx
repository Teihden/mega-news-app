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
 * Компонент Footer предоставляет элемент футера для отображения информации и взаимодействия с пользователем.
 * @param props Объект свойств компонента.
 * @param props.comments Массив комментариев, отображаемых в футере. По умолчанию пустой массив.
 * @param props.instagramLinks Массив ссылок на Instagram, используемых для отображения элементов в секции Instagram. По умолчанию пустой массив.
 * @param props.pages Массив страниц, отображаемых в навигации футера. По умолчанию пустой массив.
 * @returns Возвращает компонент.
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

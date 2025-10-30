import { type FC } from "react";
import type { IFooterProps } from "../config";
import * as S from "./styles";
import { Title } from "@shared/ui/Title";
import { WithIndicator } from "@entities/WithIndicator";
import { Btn } from "@shared/ui/Btn";
import IconMail from "@shared/assets/images/icons/icon-mail.svg?react";
import { Input } from "@shared/ui/Input";
import { FooterInstagram } from "./FooterInstagram";
import { FooterComments } from "./FooterComments";
import { FooterBottom } from "./FooterBottom";
import { FooterPages } from "./FooterPages";
import { FooterAbout } from "./FooterAbout";
import { FooterSocials } from "./FooterSocials";

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
    comments = [],
    instagramLinks = [],
    pages = [],
  } = props;

  return (
    <S.Footer>
      <S.ContrastWrapper>
        <FooterAbout />
        <FooterPages pages={pages} />

        <S.Wrapper>
          <WithIndicator variant={"primary"}>
            <Title level={2} variantLevel={4}>Newsletters</Title>
          </WithIndicator>

          <S.Form>
            <Input
              variant={"secondary"}
              componentSize={"md"}
              placeholder={"Write your email..."}
            />
            <Btn
              variant={"blank"}
              size={"md"}
              iconSize={24}
              icon={<IconMail />}
              isSquare={true}
              type={"submit"}
            />
          </S.Form>
        </S.Wrapper>

        <FooterSocials />
        <FooterBottom />
      </S.ContrastWrapper>

      <FooterComments comments={comments} />
      <FooterInstagram links={instagramLinks} />
    </S.Footer>
  );
};

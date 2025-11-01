import { type FC } from "react";
import * as S from "./styles";
import { InlineCluster } from "@bedrock-layout/primitives";
import { WithIndicator } from "@entities/WithIndicator";
import { Title } from "@shared/ui/Title";
import IconTwitter from "@shared/assets/images/icons/icon-twitter.svg?react";
import IconInstagram from "@shared/assets/images/icons/icon-instagram.svg?react";

/**
 * Компонент FooterSocials отвечает за отображение социальных сетей.
 * @returns Возвращает компонент.
 */
export const FooterSocials: FC = () => {
  return (
    <S.Wrapper>
      <WithIndicator variant={"primary"}>
        <Title level={2} variantLevel={4}>Social Network</Title>
      </WithIndicator>

      <InlineCluster gap={"size7"} align={"center"}>
        <S.InstagramBtn
          href={"https://www.instagram.com/"}
          target={"_blank"}
          rel={"noopener noreferrer"}
          size={"sm"}
          iconSize={16}
          icon={<IconInstagram />}
          text={"Instagram"}
          title={"Instagram"}
        />
        <S.TwitterBtn
          href={"https://x.com"}
          target={"_blank"}
          rel={"noopener noreferrer"}
          size={"sm"}
          iconSize={24}
          icon={<IconTwitter />}
          isSquare={true}
          title={"Twitter"}
        />
      </InlineCluster>
    </S.Wrapper>
  );
};

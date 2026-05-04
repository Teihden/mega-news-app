import { type FC } from "react";
import * as S from "./styles";
import { InlineCluster } from "@bedrock-layout/primitives";
import { WithIndicator } from "@entities/withIndicator";
import { Title } from "@shared/ui/title";
import IconTwitter from "@shared/assets/images/icons/icon-twitter.svg?react";
import IconInstagram from "@shared/assets/images/icons/icon-instagram.svg?react";
import { useTranslation } from "react-i18next";

/**
 * Displays the social network links in the footer.
 * @returns Footer socials component.
 */
export const FooterSocials: FC = () => {
  const { t } = useTranslation([ "widgets" ]);

  return (
    <S.Wrapper>
      <WithIndicator variant={"primary"}>
        <Title level={2} variantLevel={4}>{t(($) => $.footer.socialNetwork)}</Title>
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

import { type FC } from "react";
import * as S from "./styles";
import { Text } from "@shared/ui/text";
import { InlineCluster } from "@bedrock-layout/primitives";
import { Btn } from "@shared/ui/btn";
import { useTranslation } from "react-i18next";

/**
 * Displays the bottom footer area with policy links and copyright text.
 * @returns Footer bottom component.
 */
export const FooterBottom: FC = () => {
  const { t } = useTranslation([ "widgets" ]);

  return (
    <S.BottomWrapper>
      <InlineCluster gap={"size3"} align={"center"}>
        <Btn
          variant={"blank"}
          href={"./"}
          text={t(($) => $.footer.privacyPolicy)}
          isInline={true}
        />
        <Btn
          variant={"blank"}
          href={"./"}
          text={t(($) => $.footer.termsAndConditions)}
          isInline={true}
        />
      </InlineCluster>

      <Text variant={"sm"}>
        {t(($) => $.footer.copyright, { year: new Date().getFullYear() })}
      </Text>
    </S.BottomWrapper>
  );
};

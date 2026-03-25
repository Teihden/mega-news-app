import { type FC } from "react";
import * as S from "./styles";
import { Text } from "@shared/ui/text";
import { InlineCluster } from "@bedrock-layout/primitives";
import { Btn } from "@shared/ui/btn";
import { useTranslation } from "react-i18next";

/**
 * Компонент FooterBottom отвечает за отображение нижнего блока пользовательского интерфейса,
 * включающего ссылки на политику конфиденциальности и условия использования, а также текст с указанием авторских прав.
 * @returns Возвращает компонент.
 */
export const FooterBottom: FC = () => {
  const { t } = useTranslation([ "widgets" ]);

  return (
    <S.BottomWrapper>
      <InlineCluster gap={"size3"} align={"center"}>
        <Btn
          variant={"blank"}
          href={"./"}
          text={t("footer.privacyPolicy")}
          isInline={true}
        />
        <Btn
          variant={"blank"}
          href={"./"}
          text={t("footer.termsAndConditions")}
          isInline={true}
        />
      </InlineCluster>

      <Text variant={"sm"}>
        {t("footer.copyright", { year: new Date().getFullYear() })}
      </Text>
    </S.BottomWrapper>
  );
};

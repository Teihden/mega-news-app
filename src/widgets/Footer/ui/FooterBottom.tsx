import { type FC } from "react";
import * as S from "./styles";
import { Text } from "@shared/ui/Text";
import { InlineCluster } from "@bedrock-layout/primitives";
import { Btn } from "@shared/ui/Btn";

/**
 * Компонент FooterBottom отвечает за отображение нижнего блока пользовательского интерфейса,
 * включающего ссылки на политику конфиденциальности и условия использования, а также текст с указанием авторских прав.
 * @returns Возвращает компонент.
 */
export const FooterBottom: FC = () => {
  return (
    <S.BottomWrapper>
      <InlineCluster gap={"size3"} align={"center"}>
        <Btn
          variant={"blank"}
          href={"./"}
          text={"Privacy policy"}
          isInline={true}
        />
        <Btn
          variant={"blank"}
          href={"./"}
          text={"Terms & conditions"}
          isInline={true}
        />
      </InlineCluster>

      <Text variant={"sm"}>
        {"All Copyright (C) 2025 Reserved"}
      </Text>
    </S.BottomWrapper>
  );
};

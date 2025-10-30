import { type FC } from "react";
import * as S from "./styles";
import { Text } from "@shared/ui/Text";
import { WithIndicator } from "@entities/WithIndicator";
import { Title } from "@shared/ui/Title";

/**
 * Компонент FooterAbout.
 * Используется для предоставления краткой информации о новостном ресурсе Mega News.
 * @returns Возвращает компонент.
 */
export const FooterAbout: FC = () => {
  return (
    <S.Wrapper>
      <WithIndicator variant={"primary"}>
        <Title level={2} variantLevel={4}>Mega News</Title>
      </WithIndicator>

      <Text variant={"md"}>
        Keep up with the latest happenings from around the world. From major events in politics and business to stories in sports and entertainment,
        we bring you news and insights you can trust. Stay informed and never miss an important update.
      </Text>
    </S.Wrapper>
  );
};

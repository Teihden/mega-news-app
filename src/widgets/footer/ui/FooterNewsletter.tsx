import { type FC } from "react";
import * as S from "./styles";
import { WithIndicator } from "@entities/withIndicator";
import { Title } from "@shared/ui/title";
import { NewsletterSignUpForm } from "@features/newsletterSignUpForm";

/**
 * FooterNewsletter - компонент для отображения блока подписки на рассылку в нижнем колонтитуле.
 * Компонент содержит заголовок "Newsletters" и форму для подписки на рассылку. Обернут в визуальный
 * индикатор с использованием компонента WithIndicator и стилизован через Wrapper.
 * @returns Возвращает компонент.
 */
export const FooterNewsletter: FC = () => {
  return (
    <S.Wrapper>
      <WithIndicator variant={"primary"}>
        <Title level={2} variantLevel={4}>Newsletters</Title>
      </WithIndicator>

      <NewsletterSignUpForm />
    </S.Wrapper>
  );
};

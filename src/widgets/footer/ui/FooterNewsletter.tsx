import { type FC } from "react";
import * as S from "./styles";
import { WithIndicator } from "@entities/withIndicator";
import { Title } from "@shared/ui/title";
import { NewsletterSignUpForm } from "@features/newsletterSignUpForm";
import { useTranslation } from "react-i18next";

/**
 * Displays the newsletter subscription block in the footer.
 * @returns Footer newsletter component.
 */
export const FooterNewsletter: FC = () => {
  const { t } = useTranslation([ "widgets" ]);

  return (
    <S.Wrapper>
      <WithIndicator variant={"primary"}>
        <Title level={2} variantLevel={4}>{t(($) => $.footer.newsletters)}</Title>
      </WithIndicator>

      <NewsletterSignUpForm />
    </S.Wrapper>
  );
};

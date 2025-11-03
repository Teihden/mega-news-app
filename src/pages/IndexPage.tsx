import type { FC } from "react";
import { Title } from "@shared/ui/title";
import { Section } from "@shared/ui/section";

/**
 * Компонент IndexPage является функциональным компонентом, который отвечает за отображение главной страницы.
 * @returns Компонент.
 */
export const IndexPage: FC = () => {
  return (
    <>
      <Section>
        <Title>IndexPage</Title>
      </Section>
    </>
  );
};

import type { FC } from "react";
import { Title } from "@shared/ui/Title";
import { Section } from "@shared/ui/Section";

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

import type { ISection } from "../config";
import { Container } from "@shared/ui/Container";
import * as S from "./sectionStyles";

/**
 * Компонент Section представляет собой секцию с возможностью использования слотов для заголовка, основного контента и подвала.
 * @param props - Пропсы компонента.
 * @param props.className Кастомное имя класса для основного контейнера секции.
 * @param props.headerSlot Слот для отображения содержимого заголовка секции.
 * @param props.headerTag Тег для хэдера.
 * @param props.footerSlot Слот для отображения содержимого подвала секции.
 * @param props.footerTag Тег для футера.
 * @param props.children Основное содержимое секции.
 * @returns Компонент.
 */
export const Section: ISection = (props) => {
  const {
    className,
    headerSlot = null,
    headerTag = "header",
    footerSlot = null,
    footerTag = "footer",
    children = null,
  } = props;

  return (
    <S.Section
      className={className}
    >
      <Container>
        {headerSlot && (
          <S.Header
            as={headerTag}
          >
            {headerSlot}
          </S.Header>
        )}
        {children && (
          <S.Content>
            {children}
          </S.Content>
        )}
        {footerSlot && (
          <S.Footer
            as={footerTag}
          >
            {footerSlot}
          </S.Footer>
        )}
      </Container>
    </S.Section>
  );
};

Section.Container = Container.Container;
Section.Header = S.Header;
Section.Content = S.Content;
Section.Footer = S.Footer;

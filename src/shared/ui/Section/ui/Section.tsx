import { Header, Footer, StyledSection, Content } from "./section-styles";
import type { ISection } from "../config";
import { Container } from "@shared/ui/Container";

/**
 * Компонент Section представляет собой секцию с возможностью использования слотов для заголовка, основного контента и подвала.
 * @param props - Пропсы компонента.
 * @param props.className Кастомное имя класса для основного контейнера секции.
 * @param props.headerSlot Слот для отображения содержимого заголовка секции.
 * @param props.footerSlot Слот для отображения содержимого подвала секции.
 * @param props.children Основное содержимое секции.
 * @returns Возвращает стилизованный компонент с указанными слотами.
 */
export const Section: ISection = (props) => {
  const {
    className,
    headerSlot = null,
    footerSlot = null,
    children = null,
  } = props;

  return (
    <StyledSection className={className}>
      <Container>
        {headerSlot && <Header>
          {headerSlot}
        </Header>}
        {children && <Content>
          {children}
        </Content>}
        {footerSlot && <Footer>
          {footerSlot}
        </Footer>}
      </Container>
    </StyledSection>
  );
};

Section.Header = Header;
Section.Content = Content;
Section.Footer = Footer;

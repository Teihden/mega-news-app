import type { ISection } from "../config";
import { Container } from "@shared/ui/container";
import * as S from "./styles";

/**
 * Renders a layout section with optional header and footer slots.
 * @param props - Component props.
 * @param props.className - Optional custom class name for the root section.
 * @param props.as - HTML element used for rendering. Defaults to section.
 * @param props.headerSlot - Content rendered inside the section header.
 * @param props.headerTag - HTML tag used for the header wrapper.
 * @param props.footerSlot - Content rendered inside the section footer.
 * @param props.footerTag - HTML tag used for the footer wrapper.
 * @param props.withContainer - Whether the content is wrapped with Container.
 * @param props.children - Main section content.
 * @returns Section component.
 */
export const Section: ISection = (props) => {
  const {
    className,
    as = "section",
    headerSlot = null,
    headerTag = "header",
    footerSlot = null,
    footerTag = "footer",
    children = null,
    withContainer = true,
  } = props;

  const content = (
    <>
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
    </>
  );

  return (
    <S.Section
      as={as}
      className={className}
    >
      {withContainer
        ? <Container>{content}</Container>
        : content}
    </S.Section>
  );
};

Section.Section = S.Section;
Section.Container = Container.Container;
Section.Header = S.Header;
Section.Content = S.Content;
Section.Footer = S.Footer;

import type { IAccordion } from "../config";
import * as S from "./styles";
import { useEffect, useRef, useState } from "react";
import IconChevronRight from "@shared/assets/images/icons/icon-chevron-right.svg?react";
import { Title } from "@shared/ui/title";

/**
 * Renders a collapsible accordion section.
 * @param props - Component props.
 * @param props.btnProps - Props passed to the accordion button.
 * @param props.titleProps - Props passed to the accordion title.
 * @param props.isControlledOpen - Whether the accordion starts opened.
 * @param props.isActive - Whether the accordion button uses the active state.
 * @param props.title - Accordion title text.
 * @param props.children - Content revealed when the accordion is open.
 * @param props.rest - Additional props passed to the root element.
 * @returns Accordion component markup.
 */
export const Accordion: IAccordion = (props) => {
  const {
    btnProps = {},
    titleProps = {},
    isControlledOpen = false,
    isActive = true,
    title = "AccordionHeader",
    children = null,
    ...rest
  } = props;
  const [ isOpen, setIsOpen ] = useState<boolean>(isControlledOpen);
  const [ isVisible, setIsVisible ] = useState<boolean>(isControlledOpen);
  const [ height, setHeight ] = useState<string | number>(isControlledOpen ? "auto" : 0);
  const contentWrapperRef = useRef<HTMLDivElement>(null);

  /**
   * Toggles the accordion open state when the header is clicked.
   */
  const handleHeaderClick = () => setIsOpen((prev) => !prev);

  /**
   * Finalizes the open state after the content height transition ends.
   */
  const handleTransitionEnd = () => {
    if (isOpen) {
      setHeight("auto");
      setIsVisible(true);
    }
  };

  useEffect(() => {
    if (isControlledOpen === isOpen) {
      return;
    }

    setHeight(isControlledOpen ? "auto" : 0);
    setIsOpen(() => isControlledOpen);
    setIsVisible(() => isControlledOpen);
  }, [ isControlledOpen ]);

  useEffect(() => {
    const el = contentWrapperRef.current;
    if (!el) {
      return;
    }

    if (isOpen && height !== "auto") {
      setHeight(el.scrollHeight);
    }

    if (!isOpen && height === "auto") {
      setHeight(el.scrollHeight);
      setIsVisible(false);

      const timeout = setTimeout(() => setHeight(0), 100);
      return () => clearTimeout(timeout);
    }

    return;
  }, [ isOpen ]);

  return (
    <S.Accordion {...rest}>
      <S.Header $isOpen={isOpen}>
        <S.Btn
          variant={"blank"}
          $isOpen={isOpen}
          $isBtnActive={isActive}
          icon={<IconChevronRight />}
          iconPosition={"right"}
          text={(
            <Title
              as={"p"}
              variantLevel={5}
              marginBlock={"0"}
              {...titleProps}
            >
              {title}
            </Title>
          )}
          onClick={handleHeaderClick}
          isInline={true}
          {...btnProps}
        />
      </S.Header>
      <S.ContentWrapper
        ref={contentWrapperRef}
        style={{ height }}
        onTransitionEnd={handleTransitionEnd}
        $isVisible={isVisible}
      >
        <S.Content>
          {children}
        </S.Content>
      </S.ContentWrapper>
    </S.Accordion>
  );
};

Accordion.Accordion = S.Accordion;
Accordion.Header = S.Header;
Accordion.ContentWrapper = S.ContentWrapper;
Accordion.Content = S.Content;
Accordion.Btn = S.Btn;

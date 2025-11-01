import type { IAccordion } from "../config";
import * as S from "./styles";
import { useEffect, useRef, useState } from "react";
import IconVChevronRight from "@shared/assets/images/icons/icon-chevron-right.svg?react";
import { Title } from "@shared/ui/Title";

/**
 * Компонент "Accordion" представляет собой раскрывающийся элемент интерфейса.*
 * @param props Объект с параметрами компонента.
 * @param props.headerProps Свойства, которые передаются на элемент заголовка.
 * @param props.titleProps Свойства, которые передаются на заголовок (текст).
 * @param props.isDefaultOpen Определяет, будет ли аккордеон открыт по умолчанию.
 * @param props.isActive Определяет, активен ли аккордеон.
 * @param props.title Текст заголовка аккордеона.
 * @param props.children Вложенное содержимое, отображаемое при раскрытии.
 * @returns Возвращает JSX-разметку аккордеона.
 */
export const Accordion: IAccordion = (props) => {
  const {
    headerProps = {},
    titleProps = {},
    isDefaultOpen = false,
    isActive = true,
    title = "AccordionHeader",
    children = null,
  } = props;
  const [ isOpen, setIsOpen ] = useState<boolean>(isDefaultOpen);
  const [ height, setHeight ] = useState<string | number>(isDefaultOpen ? "auto" : 0);
  const contentRef = useRef<HTMLDivElement>(null);

  /**
   * Функция для обработки клика по заголовку.
   * @returns Ничего не возвращает.
   */
  const handleHeaderClick = () => setIsOpen((prev) => !prev);

  /**
   * Функция-обработчик события завершения CSS-перехода.
   * @returns Возвращает null при сворачивании, иначе ничего не возвращает.
   */
  const handleTransitionEnd = () => isOpen ? setHeight("auto") : null;

  useEffect(() => {
    const el = contentRef.current;
    if (!el) {
      return;
    }

    if (isOpen && height !== "auto") {
      setHeight(el.scrollHeight);
    }

    if (!isOpen && height === "auto") {
      setHeight(el.scrollHeight);

      const timeout = setTimeout(() => setHeight(0), 100);
      return () => clearTimeout(timeout);
    }

    return;
  }, [ isOpen ]);

  return (
    <S.Accordion>
      <S.Header $isOpen={isOpen}>
        <S.Btn
          variant={"blank"}
          $isOpen={isOpen}
          $isBtnActive={isActive}
          icon={<IconVChevronRight />}
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
          {...headerProps}
        />
      </S.Header>
      <S.Content
        ref={contentRef}
        style={{ height }}
        onTransitionEnd={handleTransitionEnd}
      >
        {children}
      </S.Content>
    </S.Accordion>
  );
};

Accordion.Accordion = S.Accordion;
Accordion.Header = S.Header;
Accordion.Content = S.Content;
Accordion.Btn = S.Btn;

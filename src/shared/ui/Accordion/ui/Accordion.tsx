import type { IAccordion } from "../config";
import * as S from "./styles";
import { useEffect, useRef, useState } from "react";
import IconVChevronRight from "@shared/assets/images/icons/icon-chevron-right.svg?react";
import { Title } from "@shared/ui/Title";

/**
 * Компонент "Accordion" представляет собой раскрывающийся элемент интерфейса.
 * @param props Объект с параметрами компонента.
 * @param props.btnProps Свойства, которые передаются на элемент кнопки заголовка.
 * @param props.titleProps Свойства, которые передаются на заголовок (текст).
 * @param props.isControlledOpen Определяет, будет ли аккордеон открыт по умолчанию.
 * @param props.isActive Определяет, активен ли аккордеон.
 * @param props.title Текст заголовка аккордеона.
 * @param props.children Вложенное содержимое, отображаемое при раскрытии.
 * @param props.rest Дополнительные свойства.
 * @returns Возвращает JSX-разметку аккордеона.
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
  const [ height, setHeight ] = useState<string | number>(isControlledOpen ? "auto" : 0);
  const contentWrapperRef = useRef<HTMLDivElement>(null);

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
    setHeight(isControlledOpen ? "auto" : 0);
    setIsOpen(() => isControlledOpen);
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
          {...btnProps}
        />
      </S.Header>
      <S.ContentWrapper
        ref={contentWrapperRef}
        style={{ height }}
        onTransitionEnd={handleTransitionEnd}
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

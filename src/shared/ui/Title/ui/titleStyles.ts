import styled, { css, type DefaultTheme } from "styled-components";
import type { IStyledTitleProps, ITitleProps } from "../config";

/**
 * Функция для получения стилей варианта из темы.
 * @param theme Объект темы, содержащий стили.
 * @param $variant Имя категории стилей, например, "title". По умолчанию "title".
 * @param $variantLevel Уровень варианта внутри категории стилей. По умолчанию 1.
 * @returns CSS-стили, соответствующие указанным параметрам.
 */
export const getVariantStyles = (
  theme: DefaultTheme, $variant: ITitleProps["variant"] = "title", $variantLevel = 1,
) => {
  const variantSet = Object.hasOwn(theme, $variant)
    ? theme[$variant]
    : theme.title as typeof theme.title;

  const style = Object.hasOwn(variantSet, $variantLevel)
    ? variantSet[$variantLevel as keyof typeof variantSet]
    : variantSet[1];

  return css`
    font-size: ${style?.fontSize};
    font-weight: ${style?.fontWeight};
    line-height: ${style?.lineHeight};
  `;
};

export const Title = styled.h1<IStyledTitleProps>`
  color: ${({ theme }) => theme.default.color};

  &:not(:last-child) {
    margin-block: ${({ theme }) => theme.default.marginBlock};
  }

  ${({ theme, $variant = "title", $variantLevel = 1 }) =>
    getVariantStyles(theme, $variant, $variantLevel)}
`;

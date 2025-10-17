import styled, { css } from "styled-components";
import type { IStyledTitleProps } from "../config";

export const Title = styled.h1<IStyledTitleProps>`
  color: ${({ theme }) => theme.default.color};

  &:not(:last-child) {
    margin-block: ${({ theme }) => theme.default.marginBlock};
  }

  ${({ theme, $variant = "title", $variantLevel = 1 }) => {
    const variantSet = (Object.hasOwn(theme, $variant)
      ? theme[$variant]
      : theme.title) as typeof theme.title;
    const style = Object.hasOwn(variantSet, $variantLevel)
      ? variantSet[($variantLevel as keyof typeof variantSet)]
      : variantSet[1];

    return css`
      font-size: ${style?.fontSize};
      font-weight: ${style?.fontWeight};
      line-height: ${style?.lineHeight};
    `;
  }}
`;

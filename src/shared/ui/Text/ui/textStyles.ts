import styled from "styled-components";
import type { IStyledTextProps } from "../config";

export const Text = styled.p<IStyledTextProps>`
  color: ${({ theme }) => theme.default.color};
  font-size: ${({ theme, $variant }) => theme.text[$variant!].fontSize};
  font-weight: ${({ theme, $variant }) => theme.text[$variant!].fontWeight};
  line-height: ${({ theme, $variant }) => theme.text[$variant!].lineHeight};

  &:not(:last-child) {
    margin-block: ${({ theme }) => theme.default.marginBlock};
  }
`;

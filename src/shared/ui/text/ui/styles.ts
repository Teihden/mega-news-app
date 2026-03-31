import styled from "styled-components";
import type { IStyledTextProps } from "../config";

export const Text = styled.p<IStyledTextProps>`
  font-size: ${({ theme, $variant }) => theme.text[$variant!].fontSize};
  font-weight: ${({ theme, $variant }) => theme.text[$variant!].fontWeight};
  line-height: ${({ theme, $variant }) => theme.text[$variant!].lineHeight};
  color: ${({ theme }) => theme.default.color};
  text-align: ${({ $align }) => $align ?? "left"};

  &:not(:last-child) {
    margin-block: ${({ theme, $marginBlock }) => $marginBlock ?? theme.default.marginBlock};
  }
`;

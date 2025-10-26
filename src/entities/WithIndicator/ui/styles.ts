import styled, { css } from "styled-components";
import type { IStyledWithIndicatorProps } from "../config";

export const WithIndicator = styled.div<IStyledWithIndicatorProps>`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  gap: .75rem;

  &::before {
    content: "";
    display: block;
  }

  ${({ theme, $variant }) => {
    return $variant === "primary" && css`
      &::before {
        width: .5rem;
        height: 1.25rem;
        background: ${theme.palette.primary["100"]};
        border-radius: ${theme.default.borderRadius};
      }
    `;
  }}

  ${({ theme, $variant }) => {
    return $variant === "secondary" && css`
      &::before {
        width: .5rem;
        height: .5rem;
        background: ${theme.palette.primary["100"]};
        border-radius: 50%;
      }
    `;
  }}

  ${({ theme, $variant }) => {
    return $variant === "tertiary" && css`
      position: relative;
      width: fit-content;

      > * {
        line-height: 1;
      }

      &::before {
        position: absolute;
        inset: auto 0 .5rem;
        width: 100%;
        height: .5rem;
        background: ${theme.palette.primary["25"]};
        border-radius: ${theme.default.borderRadius};
      }
    `;
  }}
`;

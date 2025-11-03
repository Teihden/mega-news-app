import styled, { css } from "styled-components";
import type { IStyledWithIndicatorProps } from "../config";

export const WithIndicator = styled.div<IStyledWithIndicatorProps>`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  gap: .75rem;

  &::before {
    display: block;
    content: "";
  }

  ${({ theme, $variant }) => {
    return $variant === "primary" && css`
      &::before {
        width: .5rem;
        height: 1.25rem;
        border-radius: ${theme.default.borderRadius};
        background: ${theme.palette.primary["100"]};
      }
    `;
  }}

  ${({ theme, $variant }) => {
    return $variant === "secondary" && css`
      &::before {
        width: .5rem;
        height: .5rem;
        border-radius: 50%;
        background: ${theme.palette.primary["100"]};
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
        width: 100%;
        height: .5rem;
        border-radius: ${theme.default.borderRadius};
        background: ${theme.palette.primary["25"]};
        inset: auto 0 .5rem;
      }
    `;
  }}
`;

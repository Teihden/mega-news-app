import styled, { css } from "styled-components";
import type { IStyledWithIndicatorProps } from "../config";

export const WithIndicator = styled.div<IStyledWithIndicatorProps>`
  display: flex;
  flex-flow: row nowrap;
  gap: .75rem;
  align-items: center;

  &::before {
    content: "";
    display: block;
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
        inset: auto 0 .5rem;
        width: 100%;
        height: .5rem;
        border-radius: ${theme.default.borderRadius};
        background: ${theme.palette.primary["25"]};
      }
    `;
  }}
`;

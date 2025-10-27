import styled, { css } from "styled-components";
import type { IStyledPreloaderProps } from "../config";

export const Preloader = styled.div<IStyledPreloaderProps>`
  display: flex;
  width: 100%;
  max-width: 67.5rem;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  margin: auto 12.75rem;
  gap: 5.25rem;

  ${({ theme }) => theme.media.mobile(css`
    margin: auto 4.5rem;
  `)}

  .progress-bar {
    width: 100%;
  }
`;

export const Logo = styled.div<IStyledPreloaderProps>`
  display: flex;
  width: 34rem;
  height: 7.375rem;

  svg {
    display: block;
    width: 100%;
    height: 100%;
  }
`;

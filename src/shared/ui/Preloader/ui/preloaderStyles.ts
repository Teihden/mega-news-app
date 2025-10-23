import styled, { css } from "styled-components";
import type { IStyledPreloaderProps } from "../config";

export const Preloader = styled.div<IStyledPreloaderProps>`
  display: flex;
  flex-flow: column nowrap;
  gap: 5.25rem;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 67.5rem;
  margin: auto 12.75rem;

  ${({ theme }) => theme.media.mobile(css`
    margin: auto 4.5rem;
  `)}

  .progressBar {
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

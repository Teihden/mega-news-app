import styled, { css } from "styled-components";
import type { IStyledImgProps } from "../config";

export const Picture = styled.picture`
  pointer-events: none;
  user-select: none;
  display: block;
  width: 100%;
  max-width: 100%;
  max-height: 100%;
`;

export const Img = styled.img<IStyledImgProps>`
  pointer-events: none;
  user-select: none;
  overflow: hidden;
  display: block;
  width: 100%;
  max-width: 100%;
  max-height: 100%;
  border: 0;
  border-radius: ${({ theme }) => theme.default.borderRadius};
  object-fit: ${({ $isPlaceholder }) => $isPlaceholder ? "contain" : "cover"};;
  object-position: center;
  background: ${({ theme }) => theme.mode === "light" ? theme.palette.darkGray["100"] : theme.palette.washDark["100"]};
  box-shadow: none;
  transition: ${({ theme }) => theme.default.transitionDuration} ease;

  ${({ $isLoaded }) => {
    return !$isLoaded && css`
      opacity: .6;
      filter: blur(1.25rem);
    `;
  }}
`;

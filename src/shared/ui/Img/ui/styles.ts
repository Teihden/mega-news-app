import styled, { css } from "styled-components";
import type { IStyledImgProps } from "../config";

export const Picture = styled.picture`
  display: block;
  width: 100%;
  max-width: 100%;
  max-height: 100%;
  pointer-events: none;
  user-select: none;
`;

export const Img = styled.img<IStyledImgProps>`
  display: block;
  overflow: hidden;
  width: 100%;
  max-width: 100%;
  max-height: 100%;
  border: 0;
  border-radius: ${({ theme }) => theme.default.borderRadius};
  background: ${({ theme }) => theme.palette.darkGray["100"]};
  object-fit: ${({ $isPlaceholder }) => $isPlaceholder ? "contain" : "cover"};;
  object-position: center;
  pointer-events: none;
  user-select: none;
  transition: ${({ theme }) => theme.default.transitionDuration} ease;

  ${({ $isLoaded }) => {
    return !$isLoaded && css`
      filter: blur(1.25rem);
      opacity: .6;
    `;
  }}
`;

import styled, { css } from "styled-components";
import type { IStyledImgProps } from "../config";

export const Picture = styled.picture`
  display: block;
  width: 100%;
  max-width: 100%;
  max-height: 100%;
  user-select: none;
  pointer-events: none;
`;

export const Img = styled.img<IStyledImgProps>`
  display: block;
  max-width: 100%;
  max-height: 100%;
  width: 100%;
  object-fit: ${({ $isPlaceholder }) => $isPlaceholder ? "contain" : "cover"};;
  object-position: center;
  border: 0;
  border-radius: ${({ theme }) => theme.default.borderRadius};
  background: ${({ theme }) => theme.palette.gray["100"]};
  overflow: hidden;
  user-select: none;
  pointer-events: none;

  ${({ $isLoaded }) => {
    return !$isLoaded && css`
      opacity: .6;
      filter: blur(1.25rem);
    `;
  }}
`;

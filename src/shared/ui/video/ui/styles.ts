import styled, { css } from "styled-components";
import { Btn as ComponentBtn } from "@shared/ui/btn";
import type { IStyledPlayBtn } from "@shared/ui/video/config";

export const Video = styled.video`
  user-select: none;
  overflow: hidden;
  display: block;
  width: 100%;
  height: 100%;
  border: 0;
  border-radius: ${({ theme }) => theme.default.borderRadius};
  object-fit: cover;
  background: ${({ theme }) => theme.mode === "light" ? theme.palette.darkGray["100"] : theme.palette.washDark["100"]};
  box-shadow: none;
  transition: ${({ theme }) => theme.default.transitionDuration} ease;
`;

export const PlayBtn = styled(ComponentBtn)<IStyledPlayBtn>`
  pointer-events: none;
  content: "";
  position: absolute;
  inset: 50% auto auto 50%;
  transform: translate(-50%, -50%);
  width: 15rem;
  height: 15rem;
  padding: 0;
  border: none;
  border-radius: 50%;
  color: ${({ theme }) => theme.palette.primary["100"]};
  background: ${({ theme }) => theme.palette.white["75"]};

  ${({ theme }) => theme.bp.down("mobile")} {
    width: 9.25rem;
    height: 9.25rem;
  }

  ${({ $isPlaying }) => {
    return $isPlaying && css`
      transform: translate(-50%, -50%) scale(.8);
      visibility: hidden;
      opacity: 0;
    `;
  }}
`;

export const VideoWrapper = styled.div`
  cursor: pointer;
  position: relative;
  display: block;
  width: 100%;
  height: auto;
  max-height: 100%;

  @media (hover: hover) {
    &:hover {
      ${PlayBtn} {
        color: ${({ theme }) => theme.palette.primary["75"]};
        background: ${({ theme }) => theme.palette.white["50"]};
      }
    }
  }
`;

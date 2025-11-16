import styled, { css } from "styled-components";
import { Btn as ComponentBtn } from "@shared/ui/btn";
import type { IStyledPlayBtn } from "@shared/ui/video/config";

export const Video = styled.video`
  display: block;
  overflow: hidden;
  width: 100%;
  height: 100%;
  border: 0;
  border-radius: ${({ theme }) => theme.default.borderRadius};
  background: ${({ theme }) => theme.mode === "light" ? theme.palette.darkGray["100"] : theme.palette.washDark["100"]};
  box-shadow: none;
  object-fit: cover;
  transition: ${({ theme }) => theme.default.transitionDuration} ease;
  user-select: none;
`;

export const PlayBtn = styled(ComponentBtn)<IStyledPlayBtn>`
  position: absolute;
  width: 15rem;
  height: 15rem;
  padding: 0;
  border: none;
  border-radius: 50%;
  background: ${({ theme }) => theme.palette.white["75"]};
  color: ${({ theme }) => theme.palette.primary["100"]};
  content: "";
  inset: 50% auto auto 50%;
  pointer-events: none;
  transform: translate(-50%, -50%);

  ${({ theme }) => theme.bp.down("mobile")} {
    width: 9.25rem;
    height: 9.25rem;
  }

  ${({ $isPlaying }) => {
    return $isPlaying && css`
      opacity: 0;
      transform: translate(-50%, -50%) scale(.8);
      visibility: hidden;
    `;
  }}
`;

export const VideoWrapper = styled.div`
  position: relative;
  display: block;
  width: 100%;
  height: auto;
  cursor: pointer;

  @media (hover: hover) {
    &:hover {
      ${PlayBtn} {
        background: ${({ theme }) => theme.palette.white["50"]};
        color: ${({ theme }) => theme.palette.primary["75"]};
      }
    }
  }
`;

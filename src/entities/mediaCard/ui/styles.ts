import styled, { css } from "styled-components";
import { Img as ComponentImg } from "@shared/ui/img";
import { Video as ComponentVideo } from "@shared/ui/video";
import { Title as ComponentTitle } from "@shared/ui/title";
import { Text as ComponentText } from "@shared/ui/text";
import { Btn as ComponentBtn } from "@shared/ui/btn";
import type { IStyledTextProps, IStyledBtnProps } from "../config";

export const MediaCard = styled.article`
  position: relative;
  transform: translate3d(0, 0, 0);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 100%;
  height: 100%;
  max-height: 100%;
  border-radius: ${({ theme }) => theme.default.borderRadius};
`;

export const Img = styled(ComponentImg)`
  width: 100%;
  height: 100%;
  border-radius: 0;
`;

export const Video = styled(ComponentVideo)`
  width: 100%;
  height: 100%;
  border-radius: 0;
`;

export const Btn = styled(ComponentBtn)<IStyledBtnProps>`
  color: ${({ theme }) => theme.mode === "light" ? theme.palette.black["100"] : theme.palette.white["100"]};

  ${({ $isOverlay }) => {
    return $isOverlay && css`
      &::after {
        content: "";
        position: fixed;
        inset: 0;
      }
    `;
  }}
`;

export const Title = styled(ComponentTitle)`
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
`;

export const Text = styled(ComponentText)<IStyledTextProps>`
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: ${({ $lineClamp }) => $lineClamp};
`;

export const Wrapper = styled.div`
  position: absolute;
  z-index: 1;
  inset: auto 1.5rem 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  min-height: 16.25rem;
  padding: 2rem 2rem 3rem;
  border-radius: ${({ theme }) => theme.default.borderRadius};
  background: ${({ theme }) => theme.mode === "light" ? theme.palette.white["75"] : theme.palette.washDark["75"]};
`;

export const latestVideosMediaCardStyles = css`
  flex-direction: row;
  gap: 2rem;
  width: 61rem;
  padding: 1.5rem;
  background: ${({ theme }) => theme.mode === "light" ? theme.palette.white["100"] : theme.palette.black["100"]};

  ${Img} {
    flex-shrink: 0;
    width: 23.75rem;
    height: 23.75rem;
    border-radius: ${({ theme }) => theme.default.borderRadius};
  }

  ${Wrapper} {
    position: static;
    padding: 2rem 1rem;
    background: ${({ theme }) => theme.palette.transparent};
  }
`;

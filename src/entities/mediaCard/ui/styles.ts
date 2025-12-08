import styled, { css } from "styled-components";
import { Img as ComponentImg } from "@shared/ui/img";
import { Video as ComponentVideo } from "@shared/ui/video";
import { Title as ComponentTitle } from "@shared/ui/title";
import { Text as ComponentText } from "@shared/ui/text";
import { Btn as ComponentBtn } from "@shared/ui/btn";
import type { IStyledTextProps, IStyledBtnProps } from "../config";

export const MediaCard = styled.article`
  position: relative;
  display: flex;
  overflow: hidden;
  width: 100%;
  max-width: 100%;
  height: 100%;
  max-height: 100%;
  flex-direction: column;
  border-radius: ${({ theme }) => theme.default.borderRadius};
  transform: translate3d(0, 0, 0);
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
        position: fixed;
        content: "";
        inset: 0;
      }
    `;
  }}
`;

export const Title = styled(ComponentTitle)`
  display: -webkit-box;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
`;

export const Text = styled(ComponentText)<IStyledTextProps>`
  display: -webkit-box;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: ${({ $lineClamp }) => $lineClamp};
`;

export const Wrapper = styled.div`
  position: absolute;
  z-index: 1;
  display: flex;
  min-height: 16.25rem;
  flex-direction: column;
  padding: 2rem 2rem 3rem;
  border-radius: ${({ theme }) => theme.default.borderRadius};
  background: ${({ theme }) => theme.mode === "light" ? theme.palette.white["75"] : theme.palette.washDark["75"]};
  gap: 2rem;
  inset: auto 1.5rem 1.5rem;
`;

export const latestVideosMediaCardStyles = css`
  width: 61rem;
  flex-direction: row;
  padding: 1.5rem;
  background: ${({ theme }) => theme.mode === "light" ? theme.palette.white["100"] : theme.palette.black["100"]};
  gap: 2rem;

  ${Img} {
    width: 23.75rem;
    height: 23.75rem;
    flex-shrink: 0;
    border-radius: ${({ theme }) => theme.default.borderRadius};
  }

  ${Wrapper} {
    position: static;
    padding: 2rem 1rem;
    background: ${({ theme }) => theme.palette.transparent};
  }
`;

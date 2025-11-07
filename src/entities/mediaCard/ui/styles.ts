import styled from "styled-components";
import { Img as ComponentImg } from "@shared/ui/img";
import { Title as ComponentTitle } from "@shared/ui/title";
import { Text as ComponentText } from "@shared/ui/text";
import { Btn as ComponentBtn } from "@shared/ui/btn";

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
  transition: .3s ease;
`;

export const Btn = styled(ComponentBtn)`
  color: ${({ theme }) => theme.mode === "light" ? theme.palette.black["100"] : theme.palette.white["100"]};

  &::after {
    position: fixed;
    content: "";
    inset: 0;
  }
`;

export const Title = styled(ComponentTitle)`
  display: -webkit-box;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
`;

export const Text = styled(ComponentText)`
  display: -webkit-box;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
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

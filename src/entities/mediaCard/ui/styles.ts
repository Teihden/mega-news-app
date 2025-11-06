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
  transform: translate3d(0, 0, 0);
`;

export const Img = styled(ComponentImg)`
  width: 100%;
  height: 100%;
`;

export const Btn = styled(ComponentBtn)`
  color: ${({ theme }) => theme.palette.black["100"]};

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
  flex-direction: column;
  padding: 2rem;
  border-radius: ${({ theme }) => theme.default.borderRadius};
  background: ${({ theme }) => theme.palette.white["75"]};
  gap: 2rem;
  inset: auto 1.5rem 1.5rem;
`;

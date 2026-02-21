import styled from "styled-components";
import { Img as ComponentImg } from "@shared/ui/img";
import { Text as ComponentText } from "@shared/ui/text";

export const UserCard = styled.div`
  display: grid;
  padding: 1.5rem;
  border-radius: ${({ theme }) => theme.default.borderRadius};
  background: ${({ theme }) => theme.mode === "light" ? theme.palette.gray["100"] : theme.palette.washDark["100"]};
  gap: .5rem 1rem;
  grid-template-columns: auto 1fr;
`;

export const Img = styled(ComponentImg)`
  width: 5.5rem;
  height: 5.5rem;
  flex-shrink: 0;
  background: ${({ theme }) => theme.palette.gray[100]};
  grid-area: 1 / 1 / 3 / 2;
`;

export const Name = styled(ComponentText)`
  display: -webkit-box;
  overflow: hidden;
  -webkit-box-orient: vertical;
  font-weight: 500;
  -webkit-line-clamp: 1;
`;

export const Timestamp = styled(ComponentText)`
  color: ${({ theme }) => theme.mode === "light" ? theme.palette.dark["75"] : theme.palette.white["75"]};
`;

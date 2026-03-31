import styled, { keyframes } from "styled-components";
import type { IStyledLoaderProps } from "../config";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const Loader = styled.div<IStyledLoaderProps>`
  display: grid;
  place-items: center;
  width: 100%;
  height: 100%;
  min-height: ${({ $minHeight = "30rem" }) => $minHeight};
  padding: 0;
`;

export const LoaderWrapper = styled.div`
  display: grid;
  gap: 1.5rem;
  justify-items: center;
  color: ${({ theme }) => theme.default.color};
  text-align: center;
`;

export const LoaderSpinner = styled.div`
  position: relative;
  width: 7.8rem;
  height: 7.8rem;

  &,
  &::before,
  &::after {
    border-radius: 50%;
  }

  &::before,
  &::after {
    content: "";
    position: absolute;
    inset: 50% auto auto 50%;
    transform-origin: center;
  }

  &::before {
    width: 5.8rem;
    height: 5.8rem;
    margin: -2.9rem 0 0 -2.9rem;
    border: .2rem solid ${({ theme }) => theme.mode === "light" ? theme.palette.dark[25] : theme.palette.darkGray[50]};
    border-left-color: ${({ theme }) => theme.mode === "light" ? theme.palette.dark[100] : theme.palette.white[100]};
    animation: ${rotate} .95s linear infinite;
  }

  &::after {
    width: 7.8rem;
    height: 7.8rem;
    margin: -3.9rem 0 0 -3.9rem;
    border: .2rem solid ${({ theme }) => theme.mode === "light" ? theme.palette.dark[25] : theme.palette.darkGray[50]};
    border-left-color: ${({ theme }) => theme.mode === "light" ? theme.palette.dark[100] : theme.palette.white[100]};
    animation: ${rotate} 2.1s linear infinite reverse;
  }
`;

export const LoaderSpinnerInner = styled.div`
  position: absolute;
  inset: 50% auto auto 50%;
  width: 6.8rem;
  height: 6.8rem;
  margin: -3.4rem 0 0 -3.4rem;
  border: .2rem solid ${({ theme }) => theme.mode === "light" ? theme.palette.dark[25] : theme.palette.darkGray[50]};
  border-left-color: ${({ theme }) => theme.mode === "light" ? theme.palette.dark[100] : theme.palette.white[100]};
  border-radius: 50%;
  animation: ${rotate} 1.2s linear infinite;
`;

export const LoaderMessage = styled.p`
  margin: 0;
  font-size: 2rem;
  line-height: 1.5;
`;

import styled, { css } from "styled-components";
import type { IStyledOverlayProps } from "../config";

export const Overlay = styled.div<IStyledOverlayProps>`
  ${({ $isVisible = true, $background = null, $opacity = null }) => css`
    position: fixed;
    z-index: ${({ theme }) => $isVisible ? theme.overlay.zIndex : -1};
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${({ theme }) => $background ?? theme.overlay.bg};
    inset: 0;
    opacity: ${$isVisible ? $opacity ?? 1 : 0};
    pointer-events: none;
    transition: opacity ${({ theme }) => theme.default.transitionDuration} ease-in-out;
    visibility: ${$isVisible ? "visible" : "hidden"};
  `}
`;

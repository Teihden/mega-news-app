import styled, { css } from "styled-components";
import type { IStyledOverlayProps } from "../config";

export const Overlay = styled.div<IStyledOverlayProps>`
  ${({ $isVisible = true, background = null, opacity = null }) => css`
    position: fixed;
    inset: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${background};
    opacity: ${$isVisible ? opacity ?? 1 : 0};
    visibility: ${$isVisible ? "visible" : "hidden"};
    pointer-events: none;
    ${({ theme }) => $isVisible ? theme.overlay.zIndex : -1};
    background: ${({ theme }) => background ?? theme.overlay.bg};
  `}
`;

import styled, { css } from "styled-components";
import type { IStyledOverlayProps } from "../config";

export const Overlay = styled.div<IStyledOverlayProps>`
  ${({
    $isVisible = true,
    $background = null,
    $opacity = null,
    $backdropFilter = null,
  }) => css`
    pointer-events: ${$isVisible ? "auto" : "none"};
    position: fixed;
    z-index: ${({ theme }) => theme.overlay.zIndex};
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: ${$isVisible ? $opacity ?? 1 : 0};
    background: ${({ theme }) => $background ?? theme.overlay.bg};
    backdrop-filter: ${$backdropFilter ?? "none"};
    transition: opacity ${({ theme }) => theme.default.transitionDuration} ease-in-out;
  `}
`;

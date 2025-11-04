import styled, { css } from "styled-components";
import { Btn as ComponentBtn } from "@shared/ui/btn";
import type { IStyledBurgerBtnProps } from "../config";

export const Bar = styled.div`
  display: block;
  width: 2.25rem;
  height: .375rem;
  flex-shrink: 0;
  border-radius: .5rem;
  background: ${({ theme }) => theme.palette.dark["100"]};
  transition: ${({ theme }) => theme.default.transitionDuration} ease-in-out;
`;

export const Btn = styled(ComponentBtn)<IStyledBurgerBtnProps>`
  display: flex;
  flex-direction: column;
  gap: .5rem;

  @media (hover: hover) {
    &:hover {
      ${Bar} {
        background: currentcolor;

        &:nth-of-type(1) {
          transform: translateY(.25rem) rotate(-4.5deg);
        }

        &:nth-of-type(2) {
          opacity: .9;
        }

        &:nth-of-type(3) {
          transform: translateY(-.25rem) rotate(4.5deg);
        }
      }
    }
  }

  ${({ $isBurgerBtnActive }) => {
    return $isBurgerBtnActive && css`
      ${Bar} {
        &:nth-of-type(1) {
          transform: translateY(.875rem) rotate(-45deg);
        }

        &:nth-of-type(2) {
          opacity: 0;
        }

        &:nth-of-type(3) {
          transform: translateY(-.875rem) rotate(45deg);
        }
      }

      @media (hover: hover) {
        &:hover {
          ${Bar} {
            &:nth-of-type(1) {
              transform: translateY(.75rem) rotate(-35deg);
            }

            &:nth-of-type(2) {
              opacity: .1;
            }

            &:nth-of-type(3) {
              transform: translateY(-.75rem) rotate(35deg);
            }
          }
        }
      }
    `;
  }}

  &:active {
    ${Bar} {
      background: currentcolor;
    }
  }
`;

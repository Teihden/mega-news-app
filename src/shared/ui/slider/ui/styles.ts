import styled, { css } from "styled-components";
import { MediaCard } from "@entities/mediaCard";
import { STATE_CLASSES } from "@shared/config/constants";
import { Btn as ComponentBtn } from "@shared/ui/btn";

export const Container = styled.div`
  display: block;
`;

export const Slide = styled.div`
  display: block;
`;

export const SlideWrapper = styled.div`
  width: 100%;
  height: 100%;
  opacity: 1;
  transition: ${({ theme }) => theme.default.transitionDuration} ease;
`;

export const Navigation = styled.ul`
  position: absolute;
  z-index: 1;
  display: flex;
  justify-content: space-between;
  padding: 0;
  margin: 0;
  gap: 1rem;
  inset: 50% 1.5rem auto;
  list-style: none;
  pointer-events: none;
  transform: translateY(-50%);
`;

export const NavigationItem = styled.li`
  width: fit-content;
  height: fit-content;
  padding: 0;
  margin: 0;
  pointer-events: auto;
`;

export const NavigationBtn = styled(ComponentBtn)`
  display: flex;
`;

export const Pagination = styled.div`
  && {
    position: absolute;
    z-index: 1;
    display: flex;
    width: fit-content;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 0;
    margin: 0 auto;
    gap: .75rem;
    inset: auto 1.5rem 2.5rem;
    transform: none;
  }

  &:empty {
    display: none;
  }
`;

export const Slider = styled.div`
  position: relative;
  max-width: 100%;

  ${Container} {
    max-width: 100%;
  }

  ${Slide} {
    max-width: 100%;
    height: 100%;
    border-radius: ${({ theme }) => theme.default.borderRadius};
    background: ${({ theme }) => theme.mode === "light" ? theme.palette.gray["75"] : theme.palette.washDark["100"]};

    &:has(.swiper-lazy-preloader) {
      ${SlideWrapper} {
        opacity: 0;
        pointer-events: none;
      }
    }
  }
`;

export const mainSliderStyles = css`
  ${Navigation} {
    max-width: 90rem;
    margin: 0 auto;

    ${({ theme }) => theme.bp.down("desktopBelowLarge")} {
      max-width: 100%;
    }
  }

  ${Pagination} {
    inset: auto 27% 2.5rem auto;

    ${({ theme }) => theme.bp.down("desktopBelowLarge")} {
      inset: auto 1.5rem 2.5rem;
    }

    ${({ theme }) => theme.bp.down("tablet")} {
      inset: auto 3rem 3rem auto;
    }

    ${({ theme }) => theme.bp.down("mobile")} {
      inset: auto 1.5rem 1.5rem auto;

      .swiper-pagination-bullet {
        --swiper-pagination-color: ${({ theme }) => theme.mode === "light" ? theme.palette.dark["25"] : theme.palette.white["75"]};
        --swiper-pagination-bullet-inactive-color: ${({ theme }) => theme.mode === "light" ? theme.palette.dark["10"] : theme.palette.white["50"]};
      }
    }
  }

  .${STATE_CLASSES.isActive} {
    ${Slide} {
      transition: width .5s ease;
    }
  }

  ${Slide} {
    height: 56rem;

    ${({ theme }) => theme.bp.down("tablet")} {
      height: 46rem;
    }

    ${({ theme }) => theme.bp.down("mobile")} {
      height: 40rem;
    }

    &.swiper-slide-active,
    &.swiper-slide-next + .swiper-slide,
    &.swiper-slide-next + .swiper-slide + .swiper-slide {
      ${({ theme }) => theme.bp.up("desktopBelowLarge")} {
        width: 45rem !important;
      }

      ${({ theme }) => theme.bp.between("tablet", "desktopBelowLarge")} {
        width: 40rem !important;
      }
    }

    &.swiper-slide-next {
      ${({ theme }) => theme.bp.up("desktopBelowLarge")} {
        width: 93rem !important;
      }

      ${({ theme }) => theme.bp.between("tablet", "desktopBelowLarge")} {
        width: 80rem !important;
      }
    }
  }

  ${MediaCard.Text} {
    ${({ theme }) => theme.bp.down("tablet")} {
      display: none;
    }
  }

  ${MediaCard.Title} {
    ${({ theme }) => theme.bp.down("tablet")} {
      font-size: 2.5rem;
    }

    ${({ theme }) => theme.bp.down("mobile")} {
      font-size: 2rem;
    }
  }

  ${MediaCard.Wrapper} {
    ${({ theme }) => theme.bp.down("tablet")} {
      min-height: 9rem;
    }

    ${({ theme }) => theme.bp.down("mobile")} {
      position: static;
      border-radius: 0;
      background: ${({ theme }) => theme.mode === "light" ? theme.palette.dark["5"] : theme.palette.washDark["100"]};
    }
  }
`;

export const latestVideosSliderStyles = css`
  &::after {
    position: absolute;
    z-index: 1;
    width: 21.25rem;
    height: 100%;
    background: ${({ theme }) => theme.mode === "light" ? theme.palette.gradient["4"] : theme.palette.gradient["5"]};
    content: "";
    inset: 0 0 0 auto;

    ${({ theme }) => theme.bp.down("tablet")} {
      content: none;
    }
  }

  ${Pagination} {
    display: none;

    ${({ theme }) => theme.bp.down("tablet")} {
      display: flex;
      inset: auto 3rem 3rem auto;
    }

    ${({ theme }) => theme.bp.down("mobile")} {
      inset: auto 1.5rem 1.5rem auto;

      .swiper-pagination-bullet {
        --swiper-pagination-color: ${({ theme }) => theme.mode === "light" ? theme.palette.dark["25"] : theme.palette.white["75"]};
        --swiper-pagination-bullet-inactive-color: ${({ theme }) => theme.mode === "light" ? theme.palette.dark["10"] : theme.palette.white["50"]};
      }
    }
  }

  ${Navigation} {
    max-width: 12.5rem;
    margin: 0;
    inset: -8.75rem 0 auto auto;
    transform: none;

    ${({ theme }) => theme.bp.down("tablet")} {
      max-width: 100%;
      inset: 50% 1.5rem auto;
      transform: translateY(-50%);
    }
  }

  ${NavigationBtn} {
    border-color: ${({ theme }) => theme.btn.variants.tertiary.borderColor};
    background: ${({ theme }) => theme.btn.variants.tertiary.bg};

    ${({ theme }) => theme.bp.down("tablet")} {
      border-color: ${({ theme }) => theme.btn.variants.secondary.borderColor};
      background: ${({ theme }) => theme.btn.variants.secondary.bg};
    }
  }

  ${Slide} {
    height: 56rem;
    background: transparent;

    ${({ theme }) => theme.bp.down("tablet")} {
      height: 46rem;
    }

    ${({ theme }) => theme.bp.down("mobile")} {
      height: 40rem;
    }
  }

  ${MediaCard.Text} {
    ${({ theme }) => theme.bp.down("tablet")} {
      display: none;
    }
  }

  ${MediaCard.Title} {
    ${({ theme }) => theme.bp.down("tablet")} {
      font-size: 2.5rem;
    }

    ${({ theme }) => theme.bp.down("mobile")} {
      font-size: 2rem;
    }
  }

  ${MediaCard.Wrapper} {
    min-height: 14rem;

    ${({ theme }) => theme.bp.down("tablet")} {
      min-height: 9rem;
    }

    ${({ theme }) => theme.bp.down("mobile")} {
      position: static;
      border-radius: 0;
      background: ${({ theme }) => theme.mode === "light" ? theme.palette.dark["5"] : theme.palette.washDark["100"]};
    }
  }
`;

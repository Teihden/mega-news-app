import "swiper/swiper-bundle.css" with { type: "css" };
import { css } from "styled-components";

export const swiperStyles = css`
  :root {
    --swiper-theme-color: ${({ theme }) => theme.palette.primary["100"]};
  }

  @keyframes swiper-preloader-spin {
    0% {
      transform: translate(-50%, -50%) rotate(0deg);
    }

    100% {
      transform: translate(-50%, -50%) rotate(360deg);
    }
  }

  .swiper-lazy-preloader {
    --swiper-preloader-width: auto;
    --swiper-preloader-max-height: 5.25rem;
    --swiper-preloader-min-height: 3rem;
    --swiper-preloader-height: 16%;
    --swiper-preloader-margin-top: 0;
    --swiper-preloader-margin-left: 0;
    --swiper-preloader-z-index: 10;
    --swiper-preloader-aspect-ratio: 1;
    --swiper-preloader-transform: translate(-50%, -50%);
    width: var(--swiper-preloader-width);
    max-height: var(--swiper-preloader-max-height);
    min-height: var(--swiper-preloader-min-height);
    height: var(--swiper-preloader-height);
    margin-top: var(--swiper-preloader-margin-top);
    margin-left: var(--swiper-preloader-margin-left);
    z-index: var(--swiper-preloader-z-index);
    aspect-ratio: var(--swiper-preloader-aspect-ratio);
    transform: var(--swiper-preloader-transform);
  }

  .swiper-lazy-preloader-white {
    --swiper-preloader-color: ${({ theme }) => theme.palette.white["100"]};
  }

  .swiper-lazy-preloader-black {
    --swiper-preloader-color: ${({ theme }) => theme.palette.black["100"]};
  }

  .swiper-pagination-bullets {
    --swiper-pagination-top: auto;
    --swiper-pagination-bottom: 0;
  }

  .swiper-pagination-bullet {
    --swiper-pagination-bullet-display: block;
    --swiper-pagination-bullet-position: relative;
    --swiper-pagination-bullet-width: 1.25rem;
    --swiper-pagination-bullet-height: 1.25rem;
    --swiper-pagination-bullet-border-radius: 50%;
    --swiper-pagination-bullet-overflow: visible;

    --swiper-pagination-color: ${({ theme }) => theme.palette.white["100"]};
    --swiper-pagination-bullet-inactive-color: ${({ theme }) => theme.palette.white["50"]};
    --swiper-pagination-bullet-horizontal-gap: 0;
    --swiper-pagination-bullet-inactive-opacity: 1;
    position: var(--swiper-pagination-bullet-position);
    display: var(--swiper-pagination-bullet-display);
    background-color: var(--swiper-pagination-bullet-inactive-color);
    overflow: var(--swiper-pagination-bullet-overflow);

    &::after {
      content: "";
      position: absolute;
      top: 50%;
      left: 0;
      width: 100%;
      height: 2rem;
      transform: translateY(-50%);
    }

    &-active {
      --swiper-pagination-bullet-width: 3.25rem;
      --swiper-pagination-bullet-border-radius: 6.25rem;
      --swiper-pagination-bullet-overflow: hidden;

      &::before {
        content: "";
        position: relative;
        left: 0;
        display: block;
        height: inherit;
        border-radius: var(--swiper-pagination-bullet-border-radius);
        width: calc(var(--swiper-pagination-bullet-width) * (1 - var(--swiper-autoplay-progress, 0)));
        background-color: var(--swiper-pagination-color);
      }
    }
  }
`;

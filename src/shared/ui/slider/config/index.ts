import type { FC, ReactNode } from "react";
import type { CSSProp } from "styled-components";
import type Swiper from "swiper";
import type { SwiperOptions } from "swiper/types";
import { Container, Navigation, NavigationItem, Pagination, Slide, Slider, SlideWrapper } from "../ui/styles";

export interface ISliderProps {
  className?: string;
  swiperCfg?: Swiper["params"];
  swiperThumbsCfg?: Swiper["params"];
  slides?: ReactNode[] | null;
  thumbsSlides?: ReactNode[] | null;
  isLazyLoadingSlide?: boolean;
  isLazyLoadingThumbSlide?: boolean;
  css?: CSSProp;
}

const defaultCfg: SwiperOptions = {
  slidesPerView: "auto",
  spaceBetween: 16,
  loop: false,
  watchSlidesProgress: false,
  resizeObserver: true,
  updateOnWindowResize: true,
  followFinger: true,
  preventInteractionOnTransition: true,
  preventClicks: true,
  roundLengths: true,
  touchRatio: 1,
  uniqueNavElements: true,
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
  mousewheel: {
    enabled: true,
    forceToAxis: true,
  },
};

const defaultThumbsCfg: SwiperOptions = {
  slidesPerView: "auto",
  spaceBetween: 16,
  loop: false,
  watchSlidesProgress: true,
  watchOverflow: true,
  resizeObserver: true,
  updateOnWindowResize: true,
  followFinger: true,
  preventInteractionOnTransition: true,
  preventClicks: true,
  roundLengths: true,
  touchRatio: 1,
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
  mousewheel: {
    enabled: true,
    forceToAxis: true,
  },
};

const mainCfg: SwiperOptions = {
  initialSlide: 0,
  speed: 300,
  slidesPerView: 1,
  spaceBetween: 8,
  loopAdditionalSlides: 2,
  loop: true,
  autoplay: {
    delay: 5000,
    pauseOnMouseEnter: true,
  },
  navigation: {
    enabled: true,
  },
  pagination: {
    enabled: true,
  },
  breakpoints: {
    768: {
      slidesPerView: 1,
      spaceBetween: 16,
      speed: 400,
    },
    1281: {
      slidesPerView: 2,
      spaceBetween: 24,
      speed: 500,
    },
  },
};

export const cfgs = {
  defaultCfg,
  defaultThumbsCfg,
  mainCfg,
};

export interface ISlider extends FC<ISliderProps> {
  Slider: typeof Slider;
  Container: typeof Container;
  Slide: typeof Slide;
  SlideWrapper: typeof SlideWrapper;
  Navigation: typeof Navigation;
  NavigationItem: typeof NavigationItem;
  Pagination: typeof Pagination;
}

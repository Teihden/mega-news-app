import type { FC, ReactNode } from "react";
import type { CSSProp } from "styled-components";
import type Swiper from "swiper";
import type { SwiperOptions } from "swiper/types";
import { Container, NavigationItem, Slide, Slider, SlideWrapper } from "../ui/styles";
import type { Navigation, Pagination } from "swiper/modules";

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

export const defaultCfg: SwiperOptions = {
  slidesPerView: "auto",
  spaceBetween: 8,
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

export const defaultThumbsCfg: SwiperOptions = {
  slidesPerView: "auto",
  spaceBetween: 8,
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

export const cfgs = {
  defaultCfg,
  defaultThumbsCfg,
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

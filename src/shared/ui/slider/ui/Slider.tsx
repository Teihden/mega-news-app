import { cfgs, type ISlider } from "../config";
import * as S from "./styles";
import { useEffect, useRef, useState } from "react";
import { type Swiper as TSwiper } from "swiper";
import { Swiper, type SwiperRef, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Mousewheel, Keyboard, Navigation, Pagination, Thumbs, EffectCoverflow } from "swiper/modules";
import { isUseNavigation, isUsePagination, isUseThumbs } from "../lib";
import IconChevronRight from "@shared/assets/images/icons/icon-chevron-right.svg?react";
import IconChevronLeft from "@shared/assets/images/icons/icon-chevron-left.svg?react";
import { funnel, isEmpty, isPlainObject } from "remeda";
import clsx from "clsx";
import { STATE_CLASSES } from "@shared/config/constants";
import { useTranslation } from "react-i18next";
import type { SwiperOptions } from "swiper/types";

/**
 * Renders a Swiper-based slider with optional navigation, pagination, and thumbs.
 * @param props - Component props.
 * @param props.className - Optional custom class name.
 * @param props.swiperCfg - Main slider configuration.
 * @param props.swiperThumbsCfg - Thumbnail slider configuration.
 * @param props.slides - Main slider slides.
 * @param props.thumbsSlides - Thumbnail slider slides.
 * @returns Slider component markup.
 */
export const Slider: ISlider = (props) => {
  const {
    className,
    swiperCfg = {},
    swiperThumbsCfg = {},
    slides = [],
    thumbsSlides = [],
    isLazyLoadingSlide = true,
    isLazyLoadingThumbSlide = true,
  } = props;
  const { t } = useTranslation([ "shared" ]);
  const componentRef = useRef<HTMLDivElement | null>(null);
  const swiperRef = useRef<SwiperRef | null>(null);
  const thumbsSwiperRef = useRef<SwiperRef | null>(null);
  const [ thumbsSwiper, setThumbsSwiper ] = useState<TSwiper | null>(null);
  const paginationRef = useRef<HTMLDivElement>(null);
  const navigationPrevRef = useRef<HTMLButtonElement>(null);
  const navigationNextRef = useRef<HTMLButtonElement>(null);
  const autoplayListenerAddedRef = useRef(false);

  const swiperConfig = {
    ...cfgs.defaultCfg,
    ...swiperCfg,
  };

  const thumbsSwiperConfig = {
    ...cfgs.defaultThumbsCfg,
    ...swiperThumbsCfg,
  };

  const paginationCfg = isUsePagination(swiperConfig.pagination)
    ? {
      ...swiperConfig.pagination,
      el: paginationRef.current,
      clickable: true,
      bulletElement: "button",
      type: "bullets",
      /**
       * Builds pagination button markup for a specific slide.
       * @param index - Slide index used for the bullet.
       * @param className - CSS class assigned by Swiper.
       * @returns HTML string for the localized pagination button.
       */
      renderBullet: (index, className) => {
        const label = t(($) => $.slider.goToSlide, { slide: index + 1 });
        return `<button class="${className}" type="button" title="${label}" aria-label="${label}"></button>`;
      },
    } satisfies SwiperOptions["pagination"]
    : false;

  const navigationCfg = isUseNavigation(swiperConfig.navigation)
    ? {
        ...swiperConfig.navigation,
        prevEl: navigationPrevRef.current,
        nextEl: navigationNextRef.current,
        enabled: true,
      }
    : false;

  const thumbsCfg = isUseThumbs(thumbsSlides)
    ? {
        ...swiperConfig.thumbs,
        swiper: thumbsSwiper,
      }
    : {};

  const swiperModules = [
    Mousewheel,
    Keyboard,
    ...(paginationCfg ? [ Pagination ] : []),
    ...(navigationCfg ? [ Navigation ] : []),
    ...(isUseThumbs(thumbsSlides) ? [ Thumbs ] : []),
    ...(swiperConfig.effect === "fade" ? [ EffectFade ] : []),
    ...(swiperConfig.effect === "coverflow" ? [ EffectCoverflow ] : []),
    ...(swiperConfig.autoplay && isPlainObject(swiperConfig.autoplay) && !isEmpty(swiperConfig.autoplay) ? [ Autoplay ] : []),
  ];

  const thumbsSwiperModules = [
    Mousewheel,
    ...(isUseThumbs(thumbsSlides) ? [ Thumbs ] : []),
  ];

  /**
   * Updates pagination button ARIA state for the active slide.
   * @param swiper - Swiper instance with rendered pagination bullets.
   */
  const updatePaginationButtonState = (swiper: TSwiper) => {
    const bullets = swiper.pagination?.bullets ?? [];

    bullets.forEach((bullet) => {
      bullet.setAttribute("aria-current", bullet.classList.contains("swiper-pagination-bullet-active") ? "true" : "false");
    });
  };

  const handleAutoplay = funnel((data: [ TSwiper, number, number ]) => {
    const [ ,, progress ] = data;
    const el = componentRef.current ?? null;

    if (el && el instanceof HTMLElement) {
      el.style.setProperty("--swiper-autoplay-progress", String(progress));
    }
  }, {
    /* eslint-disable-next-line jsdoc/require-jsdoc */
    reducer: (_, ...args: [ TSwiper, number, number ]) => args,
    minGapMs: 150,
    triggerAt: "start",
  });

  /* Restarts slider autoplay after a resize when hover has interrupted it. */
  const handleResize = funnel((data: [ TSwiper ]) => {
    const [ swiper ] = data;

    if (swiper.el.matches(":hover") && swiper.autoplay?.running) {
      swiper.autoplay?.stop();

      if (!autoplayListenerAddedRef.current) {
        /**
         * Restarts autoplay after the pointer leaves the slider element.
         */
        const onPointerLeave = () => {
          if (!swiper.autoplay?.running) {
            swiper.autoplay.start();
            swiper.autoplay.resume();
          }
        };

        swiper.el.addEventListener("pointerleave", onPointerLeave);
        autoplayListenerAddedRef.current = true;
      }
    }
  }, {
    /* eslint-disable-next-line jsdoc/require-jsdoc */
    reducer: (_, ...args: [ TSwiper ]) => args,
    minGapMs: 300,
    triggerAt: "start",
  });

  useEffect(() => {
    const swiper = swiperRef.current?.swiper;
    if (!swiper) {
      return;
    }

    if (isUsePagination(swiper.params.pagination) && paginationRef.current) {
      swiper.params.pagination.el = paginationRef.current;
      swiper.pagination?.init();
      swiper.pagination?.render();
      swiper.pagination?.update();
      updatePaginationButtonState(swiper);
    }

    if (isUseNavigation(swiper.params.navigation) && navigationPrevRef.current && navigationNextRef.current) {
      swiper.params.navigation.prevEl = navigationPrevRef.current;
      swiper.params.navigation.nextEl = navigationNextRef.current;
      swiper.navigation?.init();
    }
  }, [ t ]);

  return (
    <S.Slider
      ref={componentRef}
      className={className}
    >
      {/* Main Swiper */}
      <Swiper
        ref={swiperRef}
        className={clsx(`${S.Container.styledComponentId}`, { "is-main": isUseThumbs(thumbsSlides) })}
        {...swiperConfig}
        modules={swiperModules}
        pagination={paginationCfg}
        navigation={navigationCfg}
        thumbs={thumbsCfg}
        onAfterInit={(swiper: TSwiper) => {
          setTimeout(() => swiper.el?.classList.add(STATE_CLASSES.isActive), 100);
          updatePaginationButtonState(swiper);
        }}
        onSlideChange={(swiper: TSwiper) => updatePaginationButtonState(swiper)}
        onAutoplayTimeLeft={swiperConfig?.autoplay
          ? (swiper: TSwiper, time: number, progress: number) => handleAutoplay.call(swiper, time, progress)
          : () => {}}
        onResize={(swiper: TSwiper) => handleResize.call(swiper)}
      >
        {slides?.map((slide, i) => {
          return (
            <SwiperSlide
              key={i}
              className={clsx(`${S.Slide.styledComponentId}`)}
            >
              <S.SlideWrapper>
                {slide}
              </S.SlideWrapper>
              {isLazyLoadingSlide && <div className={"swiper-lazy-preloader"} />}
            </SwiperSlide>
          );
        })}
      </Swiper>

      {/* Thumbs Swiper */}
      {isUseThumbs(thumbsSlides) && (
        <Swiper
          className={clsx(`${S.Container.styledComponentId}`, { "is-thumbs": isUseThumbs(thumbsSlides) })}
          ref={thumbsSwiperRef}
          {...thumbsSwiperConfig}
          modules={thumbsSwiperModules}
          onSwiper={(swiper) => {
            setThumbsSwiper(swiper);
          }}
        >
          {thumbsSlides?.map((slide, i) => {
            return (
              <SwiperSlide
                key={i}
                className={clsx(`${S.Slide.styledComponentId}`)}
              >
                <S.SlideWrapper>
                  {slide}
                </S.SlideWrapper>
                {isLazyLoadingThumbSlide && <div className={"swiper-lazy-preloader"} />}
              </SwiperSlide>
            );
          })}
        </Swiper>
      )}

      {paginationCfg && <S.Pagination ref={paginationRef} />}

      {navigationCfg && (
        <S.Navigation>
          <S.NavigationItem>
            <S.NavigationBtn
              ref={navigationPrevRef}
              variant={"secondary"}
              title={t(($) => $.slider.previousSlide)}
              aria-label={t(($) => $.slider.previousSlide)}
              icon={<IconChevronLeft />}
              iconSize={24}
              isSquare={true}
            />
          </S.NavigationItem>
          <S.NavigationItem>
            <S.NavigationBtn
              ref={navigationNextRef}
              variant={"secondary"}
              title={t(($) => $.slider.nextSlide)}
              aria-label={t(($) => $.slider.nextSlide)}
              icon={<IconChevronRight />}
              iconSize={24}
              isSquare={true}
            />
          </S.NavigationItem>
        </S.Navigation>
      )}
    </S.Slider>
  );
};

Slider.Slider = S.Slider;
Slider.Container = S.Container;
Slider.Slide = S.Slide;
Slider.SlideWrapper = S.SlideWrapper;
Slider.Navigation = S.Navigation;
Slider.NavigationItem = S.NavigationItem;
Slider.NavigationBtn = S.NavigationBtn;
Slider.Pagination = S.Pagination;

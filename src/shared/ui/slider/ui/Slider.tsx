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

/**
 * Компонент слайдера на Swiper.
 * @param props - Свойства компонента.
 * @param props.className Кастомное имя класса.
 * @param props.swiperCfg - конфиг для главного слайдера
 * @param props.thumbsSwiperCfg - конфиг для слайдера с миниатюрами
 * @param props.slides - массив слайдов для главного слайдера
 * @param props.thumbsSlides - массив слайдов для слайдера с миниатюрами
 * @returns Возвращает JSX-разметку компонента.
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
  const { t } = useTranslation([ "common" ]);
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
        enabled: true,
      }
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

  const handleAutoplay = funnel((data: [ TSwiper, number, number ]) => {
    const [ ,,progress ] = data;
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

  /* При ресайзе свайпера запускается автопролистывание слайдов */
  const handleResize = funnel((data: [ TSwiper ]) => {
    const [ swiper ] = data;

    if (swiper.el.matches(":hover") && swiper.autoplay?.running) {
      swiper.autoplay?.stop();

      if (!autoplayListenerAddedRef.current) {
        /**
         * Обработчик события, который вызывается при выходе указателя за пределы элемента.
         * Если автоматическое воспроизведение свайпера не активно, оно будет запущено
         * и возобновлено.
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
    }

    if (isUseNavigation(swiper.params.navigation) && navigationPrevRef.current && navigationNextRef.current) {
      swiper.params.navigation.prevEl = navigationPrevRef.current;
      swiper.params.navigation.nextEl = navigationNextRef.current;
      swiper.navigation?.init();
    }
  }, []);

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
        }}
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
              title={t("previousSlide")}
              aria-label={t("previousSlide")}
              icon={<IconChevronLeft />}
              iconSize={24}
              isSquare={true}
            />
          </S.NavigationItem>
          <S.NavigationItem>
            <S.NavigationBtn
              ref={navigationNextRef}
              variant={"secondary"}
              title={t("nextSlide")}
              aria-label={t("nextSlide")}
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

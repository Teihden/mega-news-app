import { cfgs, type ISlider } from "../config";
import * as S from "./styles";
import { useEffect, useRef, useState } from "react";
import { type Swiper as TSwiper } from "swiper";
import { Swiper, type SwiperRef, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Mousewheel, Navigation, Pagination, Thumbs } from "swiper/modules";
import { isNavigation, isPagination, isThumbs } from "../lib";
import { Btn } from "@shared/ui/btn";
import IconChevronRight from "@shared/assets/images/icons/icon-chevron-right.svg?react";
import IconChevronLeft from "@shared/assets/images/icons/icon-chevron-left.svg?react";
import { funnel, isEmpty, isPlainObject } from "remeda";
import clsx from "clsx";

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

  const paginationCfg = isPagination(swiperConfig.pagination)
    ? {
        ...swiperConfig.pagination,
        el: paginationRef.current,
        clickable: true,
        enabled: true,
      }
    : false;

  const navigationCfg = isNavigation(swiperConfig.navigation)
    ? {
        ...swiperConfig.navigation,
        prevEl: navigationPrevRef.current,
        nextEl: navigationNextRef.current,
        enabled: true,
      }
    : false;

  const thumbsCfg = isThumbs(thumbsSlides)
    ? {
        ...swiperConfig.thumbs,
        thumbsContainerClass: "reactSwiper__container--isThumbs",
        slideThumbActiveClass: "reactSwiper__slide--isActive",
        swiper: thumbsSwiper,
      }
    : {};

  const swiperModules = [
    Mousewheel,
    ...(paginationCfg ? [ Pagination ] : []),
    ...(navigationCfg ? [ Navigation ] : []),
    ...(isThumbs(thumbsSlides) ? [ Thumbs ] : []),
    ...(swiperConfig.effect === "fade" ? [ EffectFade ] : []),
    ...(swiperConfig.autoplay && isPlainObject(swiperConfig.autoplay) && !isEmpty(swiperConfig.autoplay) ? [ Autoplay ] : []),
  ];

  const thumbsSwiperModules = [
    Mousewheel,
    ...(isThumbs(thumbsSlides) ? [ Thumbs ] : []),
  ];

  const handleAutoplay = funnel<[ TSwiper, number, number ], [ TSwiper, number, number ]>((data) => {
    const [ , progress ] = data;
    const el = componentRef.current ?? null;

    if (el && el instanceof HTMLElement) {
      el.style.setProperty("--swiper-autoplay-progress", String(progress));
    }
  }, { minGapMs: 150, triggerAt: "start" });

  /* При ресайзе свайпера запускается автопролистывание слайдов */
  const handleResize = funnel<[ TSwiper ], [ TSwiper ]>((data) => {
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
  }, { minGapMs: 300, triggerAt: "start" });

  /**
   * Функция обработки события "pointerenter".
   * Приостанавливает автоматическое перелистывание слайдов в swiper при наведении указателя. Блокирует возможность перелистывания слайдов вперед и назад.
   * После истечения времени, оставшегося до следующего автоматического перелистывания, возвращает возможность смены слайдов.
   */
  const handlePointerEnter = () => {
    const swiper = swiperRef.current?.swiper;

    if (!swiper || !swiper.autoplay?.running) {
      return;
    }

    swiper.allowSlideNext = false;
    swiper.allowSlidePrev = false;

    swiper.autoplay?.stop();

    setTimeout(() => {
      if (!swiper) {
        return;
      }

      swiper.allowSlideNext = true;
      swiper.allowSlidePrev = true;
    }, (swiper.autoplay?.timeLeft ?? 0));
  };

  /**
   * Обрабатывает событие выхода указателя из области компонента.
   * Если функция автопроигрывания отключена или объект swiper отсутствует, выполнение прекращается.
   * В противном случае через задержку, равную оставшемуся времени автопроигрывания, возобновляет автопроигрывание, если swiper доступен.
   */
  const handlePointerLeave = () => {
    const swiper = swiperRef.current?.swiper;

    if (!swiperConfig.autoplay || !swiper) {
      return;
    }

    setTimeout(() => {
      if (!swiper) {
        return;
      }

      swiper.autoplay?.start();
    }, swiper.autoplay?.timeLeft ?? 0);
  };

  /**
   * Обработчик события PointerDown.
   * Эта функция выполняется при срабатывании события нажатия, связанном с указателем.
   * Если autoplay не активирован в конфигурации swiper или экземпляр swiper отсутствует, функция завершает выполнение.
   * В противном случае она разрешает переходы к следующему и предыдущему слайду.
   */
  const handlePointerDown = () => {
    const swiper = swiperRef.current?.swiper;

    if (!swiperConfig.autoplay || !swiper) {
      return;
    }

    swiper.allowSlideNext = true;
    swiper.allowSlidePrev = true;
  };

  useEffect(() => {
    const swiper = swiperRef.current?.swiper;
    if (!swiper) {
      return;
    }

    if (isPagination(swiper.params.pagination) && paginationRef.current) {
      swiper.params.pagination.el = paginationRef.current;
      swiper.pagination?.init();
      swiper.pagination?.render();
    }

    if (isNavigation(swiper.params.navigation) && navigationPrevRef.current && navigationNextRef.current) {
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
      <div
        style={{
          display: "contents",
        }}
        onPointerEnter={handlePointerEnter}
        onPointerLeave={handlePointerLeave}
        onPointerDown={handlePointerDown}
      >
        <Swiper
          ref={swiperRef}
          className={clsx(`${S.Container.styledComponentId}`, { "is-main": isThumbs(thumbsSlides) })}
          {...swiperConfig}
          modules={swiperModules}
          pagination={paginationCfg}
          navigation={navigationCfg}
          thumbs={thumbsCfg}
          onAutoplayTimeLeft={swiperConfig?.autoplay
            ? (swiper: TSwiper, time: number, progress: number) => handleAutoplay.call(swiper, time, progress)
            : () => {
              }}
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
      </div>

      {/* Thumbs Swiper */}
      {isThumbs(thumbsSlides) && (
        <Swiper
          className={clsx(`${S.Container.styledComponentId}`, { "is-thumbs": isThumbs(thumbsSlides) })}
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
            <Btn
              ref={navigationPrevRef}
              variant={"secondary"}
              title={"previous slide"}
              icon={<IconChevronLeft />}
              iconSize={24}
              isSquare={true}
            />
          </S.NavigationItem>
          <S.NavigationItem>
            <Btn
              ref={navigationNextRef}
              variant={"secondary"}
              title={"next slide"}
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
Slider.Pagination = S.Pagination;

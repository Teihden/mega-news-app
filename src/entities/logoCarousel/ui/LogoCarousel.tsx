import type { ILogoCarousel } from "../config";
import * as S from "./styles";
import { Link } from "react-router";
import { useState } from "react";

/**
 * Компонент LogoCarousel, который создает карусель для логотипов с функцией анимации.
 * @param props Свойства компонента.
 * @param props.items - Массив данных для элементов карусели.
 * @param props.rest Дополнительные свойства.
 * @returns Возвращает компонент.
 */
export const LogoCarousel: ILogoCarousel = (props) => {
  const {
    items = [],
    ...rest
  } = props;
  const [ animationState, setAnimationState ] = useState("running");

  /**
   * Обрабатывает событие наведения указателя мыши, изменяя состояние анимации на "paused".
   * @returns Метод ничего не возвращает.
   */
  const handlePointerEnter = () => setAnimationState("paused");

  /**
   * Обрабатывает событие покидания указателя области компонента.
   * @returns Метод ничего не возвращает.
   */
  const handlePointerLeave = () => setAnimationState("running");

  return (
    <S.LogoCarousel
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
      {...rest}
    >
      <S.LogoCarouselInner
        style={{
          animationPlayState: animationState,
        }}
      >
        {items?.map(({ src, width, height, alt }, i) => (
          <S.Btn
            key={`${alt}-${i}`}
            forwardedAs={Link}
            to={"/"}
            variant={"blank"}
            title={alt}
          >
            <S.Img
              src={src}
              width={width}
              height={height}
              alt={alt}
            />
            <S.HashTag>
              {alt}
            </S.HashTag>
          </S.Btn>
        ))}
      </S.LogoCarouselInner>
    </S.LogoCarousel>
  );
};

LogoCarousel.LogoCarousel = S.LogoCarousel;
LogoCarousel.LogoCarouselInner = S.LogoCarouselInner;
LogoCarousel.Img = S.Img;
LogoCarousel.Btn = S.Btn;
LogoCarousel.HashTag = S.HashTag;

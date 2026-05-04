import type { ILogoCarousel } from "../config";
import * as S from "./styles";
import { Link } from "react-router";
import { useState } from "react";

/**
 * Renders an animated carousel of linked logos.
 * @param props - Component props.
 * @param props.items - Logo items rendered in the carousel.
 * @param props.rest - Additional props passed to the root element.
 * @returns Logo carousel component.
 */
export const LogoCarousel: ILogoCarousel = (props) => {
  const {
    items = [],
    ...rest
  } = props;
  const [ animationState, setAnimationState ] = useState("running");

  /**
   * Pauses the logo animation while the carousel is hovered.
   * @returns void
   */
  const handlePointerEnter = () => setAnimationState("paused");

  /**
   * Resumes the logo animation when the pointer leaves the carousel.
   * @returns void
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

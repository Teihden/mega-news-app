import { useEffect, useState } from "react";
import * as S from "./styles";
import type { IImg } from "@shared/ui/img/config";
import imgStub2 from "@shared/assets/images/stubs/placeholder-2.png";
import { loadImage } from "@shared/utils";

/**
 * Renders an image with optional <picture> sources and a fallback placeholder.
 * @param props - Component props.
 * @param props.src - Primary image URL.
 * @param props.sources - Additional picture sources for responsive images.
 * @param props.placeholder - Fallback image shown when loading fails.
 * @param props.alt - Alternative text for the image.
 * @param props.rest - Additional props forwarded to the image element.
 * @returns Image component.
 */
export const Img: IImg = (props) => {
  const {
    src = "",
    sources = [],
    placeholder = imgStub2,
    alt = "Image",
    ...rest
  } = props;
  const [ currentSrc, setCurrentSrc ] = useState<null | string>(null);
  const [ isLoaded, setIsLoaded ] = useState(false);
  const [ isCancelledLoad, setIsCancelledLoad ] = useState(false);

  useEffect(() => {
    const imgSrc = sources && sources.length > 0
      ? sources.find(({ srcset = "", media = "" }) => {
        const mq = window.matchMedia(media);
        if (srcset && media && mq.matches) {
          return srcset;
        } else {
          return null;
        }
      })?.srcset ?? src
      : src;

    if (!imgSrc) {
      setIsLoaded(true);
      setCurrentSrc(placeholder);
      return;
    }

    setIsCancelledLoad(false);

    void loadImage(imgSrc)
      .then(() => {
        if (!isCancelledLoad) {
          setCurrentSrc(imgSrc);
        }
        return;
      })
      .catch(() => {
        if (!isCancelledLoad) {
          setCurrentSrc(placeholder);
        }
      })
      .finally(() => {
        setIsLoaded(true);
      });

    return () => setIsCancelledLoad(true);
  }, [ src, sources, placeholder ]);

  const imgEl = (
    <S.Img
      src={currentSrc}
      loading={"lazy"}
      decoding={"async"}
      alt={currentSrc ? alt : ""}
      $isLoaded={isLoaded}
      $isPlaceholder={currentSrc === placeholder}
      onError={() => setCurrentSrc(placeholder)}
      {...rest}
    />
  );

  return ((sources && sources?.length > 0)
    ? (
        <S.Picture>
          {sources.map(({ srcset, media, type }) => (
            <source
              key={srcset}
              srcSet={srcset}
              media={media}
              type={type}
            />
          ))}
          {imgEl}
        </S.Picture>
      )
    : (imgEl));
};

Img.Img = S.Img;
Img.Picture = S.Picture;

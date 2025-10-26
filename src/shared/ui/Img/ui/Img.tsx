import { type FC, useEffect, useState } from "react";
import * as S from "./imgStyles";
import type { IImgProps } from "@shared/ui/Img/config";
import imgStub2 from "@shared/assets/images/stubs/placeholder-2.png";
import { loadImage } from "@shared/utils";

/**
 * Компонент для отображения изображения с поддержкой источников для элементов `<picture>` и плейсхолдера.
 * @param props - Свойства компонента.
 * @param props.src URL основного изображения.
 * @param props.sources Массив объектов с дополнительными источниками для тэга `<picture>`. Каждый источник может содержать поля `srcSet`, `media` и `type`.
 * @param props.placeholder Путь к изображению-заглушке, отображаемой, если основное изображение не загрузилось. По умолчанию используется `imgStub2`.
 * @param props.alt Альтернативный текст для изображения.
 * @param props.rest Дополнительные свойства, передаваемые в изображение.
 * @returns Компонент изображения.
 */
export const Img: FC<IImgProps> = (props) => {
  const {
    src = "",
    sources = [],
    placeholder = imgStub2,
    alt = "Изображение",
    ...rest
  } = props;
  const [ currentSrc, setCurrentSrc ] = useState<null | string>(null);
  const [ isLoaded, setIsLoaded ] = useState(false);
  const [ isCancelledLoad, setIsCancelledLoad ] = useState(false);

  useEffect(() => {
    const imgSrc = sources && sources.length > 0
      ? sources.find(({ srcSet = "", media = "" }) => {
        const mq = window.matchMedia(media);
        if (srcSet && media && mq.matches) {
          return srcSet;
        } else {
          return null;
        }
      })?.srcSet ?? src
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
      fetchPriority={"auto"}
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
          {sources.map(({ srcSet, media, type }) => (
            <source
              key={srcSet}
              srcSet={srcSet}
              media={media}
              type={type}
            />
          ))}
          {imgEl}
        </S.Picture>
      )
    : (imgEl));
};

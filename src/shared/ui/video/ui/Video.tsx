import * as S from "./styles";
import type { IVideo } from "../config";
import PlayIcon from "@shared/assets/images/icons/icon-play.svg?react";
import { useRef, useState } from "react";
import { useTheme } from "styled-components";
import { useMediaQuery } from "styled-breakpoints/use-media-query";

/**
 * Компонент Video представляет видеоплеер с пользовательскими настройками.
 * @param props - Свойства компонента.
 * @param props.className - Кастомный класс для обертки компонента.
 * @param props.poster - Путь к постеру видео, отображаемому до начала воспроизведения.
 * @param props.sources - Список источников видео с их параметрами (src, media, type).
 * @param props.css - Пользовательские CSS-стили для компонента.
 * @param props.rest - Дополнительные параметры, передаваемые в компонент видео.
 * @returns Компонент Video.
 */
export const Video: IVideo = (props) => {
  const {
    className,
    poster = "",
    sources = [],
    css = {},
    ...rest
  } = props;
  const [ isPlaying, setIsPlaying ] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const { down } = useTheme().bp;
  const isMobileDown = useMediaQuery(down("mobile"));

  /**
   * Обработчик события, связанный с воспроизведением и приостановкой видео.
   */
  const handleClick = () => {
    const video = videoRef.current ?? null;

    if (!video || video.controls) {
      return;
    }

    video[video.paused ? "play" : "pause"]();
    setIsPlaying(!video.paused);
  };

  return (
    <S.VideoWrapper
      className={className}
      css={css}
      onClick={handleClick}
    >
      <S.Video
        ref={videoRef}
        poster={poster}
        controls={false}
        autoPlay={false}
        loop={true}
        playsInline={true}
        muted={true}
        controlsList={"nodownload"}
        disablePictureInPicture={true}
        preload={"metadata"}
        {...rest}
      >
        {sources.map(({ src, media, type }) => (
          <source
            key={src}
            src={src}
            media={media}
            type={type}
          />
        ))}
        {"Your browser does not support video playback."}
      </S.Video>
      {!rest.controls && (
        <S.PlayBtn
          iconSize={isMobileDown ? 40 : 72}
          icon={<PlayIcon />}
          $isPlaying={isPlaying}
        />
      )}
    </S.VideoWrapper>
  );
};

Video.VideoWrapper = S.VideoWrapper;
Video.Video = S.Video;

import * as S from "./styles";
import type { IVideo } from "../config";
import PlayIcon from "@shared/assets/images/icons/icon-play.svg?react";
import { useRef, useState } from "react";
import { useTheme } from "styled-components";
import { useMediaQuery } from "styled-breakpoints/use-media-query";

/**
 * Renders a custom video player with a play overlay button.
 * @param props - Component props.
 * @param props.className - Optional CSS class for the wrapper.
 * @param props.poster - Poster image shown before playback starts.
 * @param props.sources - Video sources rendered inside the `<video>` element.
 * @param props.css - Custom CSS passed to the wrapper.
 * @param props.rest - Additional video element props.
 * @returns Video component.
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
   * Toggles playback when the video wrapper is clicked.
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

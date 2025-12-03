import type { FC, VideoHTMLAttributes } from "react";
import { Video, VideoWrapper } from "../ui/styles";

export interface IVideoProps extends VideoHTMLAttributes<HTMLVideoElement> {
  poster?: string;
  sources?: Partial<HTMLSourceElement>[];
}

export interface IVideo extends FC<IVideoProps> {
  VideoWrapper: typeof VideoWrapper;
  Video: typeof Video;
}

export interface IStyledPlayBtn {
  $isPlaying?: boolean;
}

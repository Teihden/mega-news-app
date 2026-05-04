import { useEffect, useState } from "react";
import { type IPreloader } from "../config";
import * as S from "./styles";
import { Overlay } from "@shared/ui/overlay";
import ProgressBar from "@ramonak/react-progress-bar";
import { defaultTheme } from "@app/styles";
import { isPreloaderShown, usePageLoadProgress } from "../lib";

/**
 * Renders the startup preloader with optional logo and progress bar.
 * @param props - Component props.
 * @param props.logo - Optional logo rendered above the progress bar.
 * @returns Preloader component.
 */
export const Preloader: IPreloader = (props) => {
  const {
    logo = null,
  } = props;

  const progress = usePageLoadProgress();
  const [ isVisible, setIsVisible ] = useState(() => !isPreloaderShown());

  useEffect(() => {
    if (progress === 100) {
      const timeout = setTimeout(() => setIsVisible(false), 300);
      return () => clearTimeout(timeout);
    }

    return () => {};
  }, [ progress ]);

  return (
    <Overlay
      isVisible={isVisible}
    >
      <S.Preloader>
        {logo && (
          <S.Logo>
            {logo}
          </S.Logo>
        )}
        <ProgressBar
          className={"progress-bar"}
          completed={progress}
          maxCompleted={100}
          bgColor={defaultTheme.palette.secondary["100"]}
          baseBgColor={defaultTheme.palette.gray["100"]}
          borderRadius={"50px"}
          height={"15px"}
          width={"100%"}
          isLabelVisible={false}
          transitionDuration={"0.2s"}
        />
      </S.Preloader>
    </Overlay>
  );
};

Preloader.Preloader = S.Preloader;

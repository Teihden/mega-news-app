import { useEffect, useState } from "react";
import { COOKIE_CFG, type IPreloader } from "../config";
import * as S from "./styles";
import { Overlay } from "@shared/ui/Overlay";
import ProgressBar from "@ramonak/react-progress-bar";
import { defaultTheme } from "@app/styles";
import { usePageLoadProgress } from "../lib";
import Cookies from "js-cookie";

/**
 * Функциональный компонент Preloader.
 * @param props - Свойства компонента.
 * @param props.logo - Логотип.
 * @returns Возвращает компонент.
 */
export const Preloader: IPreloader = (props) => {
  const {
    logo = null,
  } = props;

  const progress = usePageLoadProgress();
  const [ isVisible, setIsVisible ] = useState(() => Cookies.get(COOKIE_CFG.name) !== COOKIE_CFG.value);

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

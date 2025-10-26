import { type FC } from "react";
import type { IOverlayProps } from "@shared/ui/Overlay/config";
import * as S from "./styles";

/**
 * Компонент Overlay используется для отображения перекрытий на экране.
 * @param props - Свойства компонента.
 * @param props.isVisible Определяет видимость оверлея. По умолчанию true.
 * @param props.background Цвет или стиль фона для оверлея.
 * @param props.opacity Прозрачность фона.
 * @returns Содержимое, отображаемое внутри оверлея.
 */
export const Overlay: FC<IOverlayProps> = (props) => {
  const {
    isVisible = true,
    background = null,
    opacity = null,
    children = null,
  } = props;

  return (
    <S.Overlay
      $isVisible={isVisible}
      $background={background}
      $opacity={opacity}
    >
      {children}
    </S.Overlay>
  );
};

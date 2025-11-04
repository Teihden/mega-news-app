import type { IOverlay } from "@shared/ui/overlay/config";
import * as S from "./styles";

/**
 * Компонент Overlay используется для отображения перекрытий на экране.
 * @param props - Свойства компонента.
 * @param props.isVisible Определяет видимость оверлея. По умолчанию true.
 * @param props.background Цвет или стиль фона для оверлея.
 * @param props.opacity Прозрачность фона.
 * @param props.backdropFilter Фильтр фона.
 * @param props.onClick Функция, которая вызывается при клике на компонент.
 * @returns Содержимое, отображаемое внутри оверлея.
 */
export const Overlay: IOverlay = (props) => {
  const {
    isVisible = true,
    background = null,
    opacity = null,
    backdropFilter = null,
    onClick = () => {},
    children = null,
    ...rest
  } = props;

  return (
    <S.Overlay
      $isVisible={isVisible}
      $background={background}
      $opacity={opacity}
      $backdropFilter={backdropFilter}
      onClick={onClick}
      {...rest}
    >
      {children}
    </S.Overlay>
  );
};

Overlay.Overlay = S.Overlay;

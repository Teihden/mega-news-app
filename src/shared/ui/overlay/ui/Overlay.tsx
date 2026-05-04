import type { IOverlay } from "@shared/ui/overlay/config";
import * as S from "./styles";

/**
 * Renders an overlay layer over the current screen content.
 * @param props - Component props.
 * @param props.isVisible - Whether the overlay is visible.
 * @param props.background - Optional overlay background value.
 * @param props.opacity - Optional overlay opacity.
 * @param props.backdropFilter - Optional backdrop filter value.
 * @param props.onClick - Click handler for the overlay.
 * @returns Overlay component.
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

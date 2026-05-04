import { type IBurgerBtnProps } from "../config";
import * as S from "./styles";
import { type FC, useImperativeHandle, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

/**
 * Renders the burger button used to open and close navigation menus.
 * @param props - Component props.
 * @param props.onClickCb - Optional callback fired after the button is clicked.
 * @returns Burger button component.
 */
export const BurgerBtn: FC<IBurgerBtnProps> = (props) => {
  const {
    onClickCb = null,
    ref,
  } = props;
  const { t } = useTranslation([ "features" ]);
  const [ isBurgerBtnActive, setIsBurgerBtnActive ] = useState(false);
  const refObject = useRef<HTMLButtonElement | null>(null);
  const label = isBurgerBtnActive
    ? t(($) => $.burgerBtn.closeMenu)
    : t(($) => $.burgerBtn.openMenu);

  useImperativeHandle((ref), () => ({
    ref: refObject,
    setIsBurgerBtnActive,
    isBurgerBtnActive,
  }));

  /**
   * Toggles the visual button state and calls the external click callback.
   */
  const handleClick = () => {
    setIsBurgerBtnActive((prev) => !prev);

    if (typeof onClickCb === "function") {
      onClickCb();
    }
  };

  return (
    <S.Btn
      ref={refObject}
      variant={"secondary"}
      size={"md"}
      isSquare={true}
      title={label}
      aria-label={label}
      $isBurgerBtnActive={isBurgerBtnActive}
      onClick={handleClick}
    >
      <S.Bar />
      <S.Bar />
      <S.Bar />
    </S.Btn>
  );
};

import type { Dispatch, Ref, RefObject, SetStateAction } from "react";

export interface IBurgerBtnRef {
  ref: Ref<HTMLButtonElement | null>;
  isBurgerBtnActive: boolean;
  setIsBurgerBtnActive: Dispatch<SetStateAction<boolean>>;
}

export interface IBurgerBtnProps {
  ref?: RefObject<IBurgerBtnRef | null>;
  onClickCb?: () => void;
}

export interface IStyledBurgerBtnProps {
  $isBurgerBtnActive?: boolean;
}

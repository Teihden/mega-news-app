import { type IBurgerBtnProps } from "../config";
import * as S from "./styles";
import { type FC, useImperativeHandle, useRef, useState } from "react";

/**
 * Компонент кнопки-бургера.
 * @param props - Свойства компонента.
 * @param props.onClickCb - Функция обратного вызова, которая вызывается при клике на кнопку.
 * @returns Возвращает компонент.
 */
export const BurgerBtn: FC<IBurgerBtnProps> = (props) => {
  const {
    onClickCb = null,
    ref,
  } = props;
  const [ isBurgerBtnActive, setIsBurgerBtnActive ] = useState(false);
  const refObject = useRef<HTMLButtonElement | null>(null);

  useImperativeHandle((ref), () => ({
    ref: refObject,
    setIsBurgerBtnActive,
    isBurgerBtnActive,
  }));

  /**
   * Функция обработчик события клика.
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
      title={``}
      aria-label={``}
      $isBurgerBtnActive={isBurgerBtnActive}
      onClick={handleClick}
    >
      <S.Bar />
      <S.Bar />
      <S.Bar />
    </S.Btn>
  );
};

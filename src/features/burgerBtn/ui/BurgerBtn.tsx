import { type IBurgerBtnProps } from "../config";
import * as S from "./styles";
import { type FC, useState } from "react";

/**
 * Компонент кнопки-бургера.
 * @param props - Свойства компонента.
 * @param props.onClickCb - Функция обратного вызова, которая вызывается при клике на кнопку.
 * @returns Возвращает компонент.
 */
export const BurgerBtn: FC<IBurgerBtnProps> = (props) => {
  const {
    onClickCb = null,
  } = props;
  const [ isOpen, setIsOpen ] = useState(false);

  /**
   * Функция обработчик события клика.
   */
  const handleClick = () => {
    setIsOpen((prev) => !prev);

    if (typeof onClickCb === "function") {
      onClickCb();
    }
  };

  return (
    <S.Btn
      variant={"secondary"}
      size={"md"}
      isSquare={true}
      title={``}
      aria-label={``}
      $isOpen={isOpen}
      onClick={handleClick}
    >
      <S.Bar />
      <S.Bar />
      <S.Bar />
    </S.Btn>
  );
};

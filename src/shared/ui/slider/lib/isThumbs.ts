import { isEmpty, isArray } from "remeda";
import type { ReactNode } from "react";

/**
 * Переменная, представляющая собой функцию, которая проверяет, является ли переданный аргумент массивом элементов ReactNode.
 * Функция возвращает значение true, если аргумент является массивом, который не пустой и содержит элементы ReactNode, или false в противном случае.
 * @param thumbsSlides - проверяемый аргумент, который может быть массивом элементов ReactNode.
 * @returns Результат проверки: true, если аргумент является массивом элементов ReactNode, который не пустой, иначе false.
 */
export const isThumbs = (thumbsSlides: ReactNode[] | null): thumbsSlides is ReactNode[] =>
  Boolean(thumbsSlides && isArray(thumbsSlides) && !isEmpty(thumbsSlides));

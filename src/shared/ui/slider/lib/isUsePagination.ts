import type { SwiperOptions } from "swiper/types";
import { isEmpty, isPlainObject } from "remeda";

/**
 * Переменная `isPagination` представляет собой функцию, которая проверяет,
 * является ли переданный параметр `pagination` объектом конфигурации пагинации
 * для Swiper, исключая случаи, когда он равен `false` или `undefined`.
 * @param pagination - Параметр, представляющий настройку пагинации компонента Swiper.
 * @returns Возвращает `true`, если `pagination` является объектом и содержит данные, иначе `false`.
 */
export const isUsePagination = (pagination: SwiperOptions["pagination"]): pagination is Exclude<SwiperOptions["pagination"], boolean | undefined> =>
  Boolean(pagination && isPlainObject(pagination) && !isEmpty(pagination));

import type { SwiperOptions } from "swiper/types";
import { isEmpty, isPlainObject } from "remeda";

/**
 * Проверяет, является ли переданный параметр `navigation` объектом конфигурации навигации.
 * @param navigation Параметр, представляющий настройку навигации для Swiper.
 * @returns Возвращает true, если `navigation` является объектом конфигурации навигации, который не является булевым значением или undefined, и содержит свойства.
 */
export const isUseNavigation = (navigation: SwiperOptions["navigation"]): navigation is Exclude<SwiperOptions["navigation"], boolean | undefined> =>
  Boolean(navigation && isPlainObject(navigation) && !isEmpty(navigation));

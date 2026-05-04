import type { SwiperOptions } from "swiper/types";
import { isEmpty, isPlainObject } from "remeda";

/**
 * Checks whether `navigation` is a Swiper navigation configuration object.
 * @param navigation - Navigation setting passed to Swiper.
 * @returns `true` when `navigation` is a non-empty configuration object, otherwise `false`.
 */
export const isUseNavigation = (navigation: SwiperOptions["navigation"]): navigation is Exclude<SwiperOptions["navigation"], boolean | undefined> =>
  Boolean(navigation && isPlainObject(navigation) && !isEmpty(navigation));

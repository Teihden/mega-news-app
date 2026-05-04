import type { SwiperOptions } from "swiper/types";
import { isEmpty, isPlainObject } from "remeda";

/**
 * Checks whether `pagination` is a Swiper pagination configuration object.
 * Excludes `false` and `undefined` values.
 * @param pagination - Pagination setting passed to Swiper.
 * @returns `true` when `pagination` is a non-empty configuration object, otherwise `false`.
 */
export const isUsePagination = (pagination: SwiperOptions["pagination"]): pagination is Exclude<SwiperOptions["pagination"], boolean | undefined> =>
  Boolean(pagination && isPlainObject(pagination) && !isEmpty(pagination));

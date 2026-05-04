import { isEmpty, isArray } from "remeda";
import type { ReactNode } from "react";

/**
 * Checks whether the provided `thumbsSlides` value is a non-empty array of React nodes.
 * @param thumbsSlides - Value to check.
 * @returns `true` when `thumbsSlides` is a non-empty array, otherwise `false`.
 */
export const isUseThumbs = (thumbsSlides: ReactNode[] | null): thumbsSlides is ReactNode[] =>
  Boolean(thumbsSlides && isArray(thumbsSlides) && !isEmpty(thumbsSlides));

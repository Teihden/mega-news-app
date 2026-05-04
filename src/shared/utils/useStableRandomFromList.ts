import { useRef } from "react";
import { randomInteger } from "remeda";

type TCacheKey = string | number;

/**
 * Provides stable random selection from a list for repeated cache keys.
 * @returns Object with the `pick` and `clear` methods.
 */
export const useStableRandomFromList = () => {
  const cacheRef = useRef<Map<TCacheKey, unknown>>(new Map());

  /**
   * Selects a random item from the provided list using the given cache key.
   * Returns the cached item when the key was already used.
   * Returns `undefined` when the list is empty.
   * @param list - Source list to select from.
   * @param key - Cache key used to store and reuse the chosen value.
   * @returns Selected item or `undefined` when the list is empty.
   */
  const pick = <T>(list: T[], key: TCacheKey): T | undefined => {
    if (list.length === 0) {
      return undefined;
    }

    const cached = cacheRef.current.get(key);
    if (cached !== undefined) {
      return cached as T;
    }

    const index = randomInteger(0, list.length - 1);
    const chosen = list[index]!;
    cacheRef.current.set(key, chosen);
    return chosen;
  };

  /**
   * Clears the current cache contents.
   */
  const clear = () => {
    cacheRef.current.clear();
  };

  return {
    pick,
    clear,
  };
};

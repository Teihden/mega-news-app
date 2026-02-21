import { useRef } from "react";
import { randomInteger } from "remeda";

type TCacheKey = string | number;

/**
 * useStableRandomFromList предоставляет механизм выбора случайного элемента из
 * заданного списка, сохраняя стабильность результата для одинаковых ключей кэша.
 * @returns Объект, содержащий методы `pick` и `clear`.
 */
export const useStableRandomFromList = () => {
  const cacheRef = useRef<Map<TCacheKey, unknown>>(new Map());

  /**
   * Выбирает случайный элемент из заданного списка на основе указанного ключа.
   * Если элемент уже находится в кеше, возвращает его из кеша. Если список пуст, возвращает undefined.
   * @param list - Список элементов, из которого выбирается элемент.
   * @param key - Ключ для поиска закешированного значения.
   * @returns Возвращает выбранный элемент или undefined, если список пуст.
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
   * Очищает содержимое текущего кеша.
   * Вызывает метод `clear` у ссылки на объект кеша.
   */
  const clear = () => {
    cacheRef.current.clear();
  };

  return {
    pick,
    clear,
  };
};

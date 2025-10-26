import type { StoreApi, UseBoundStore } from "zustand";

type TWithSelectors<S> = S extends { getState: () => infer T }
  ? S & { use: { [K in keyof T]: () => T[K] } }
  : never;

/**
 * Функция-декоратор для Zustand-хранилища, автоматически создающая селекторы для каждого поля состояния.
 * После вызова `createSelectors(store)` получаешь объект `store.use`, содержащий хуки вида:
 * ```ts
 * store.use.count()  // аналог useStore((s) => s.count)
 * store.use.theme()  // аналог useStore((s) => s.theme)
 * ```
 * @template S Тип Zustand-хранилища (`UseBoundStore<StoreApi<object>>`)
 * @param _store Экземпляр Zustand-хранилища, для которого нужно сгенерировать селекторы.
 * @returns Тот же экземпляр хранилища, расширенный полем `use`, содержащим хуки-селекторы.
 */
export const createSelectors = <S extends UseBoundStore<StoreApi<object>>>(
  _store: S,
) => {
  const store = _store as TWithSelectors<typeof _store>;

  store.use = {};

  for (const k of Object.keys(store.getState())) {
    /**
     * Создаёт хук, возвращающий значение конкретного поля состояния.
     * @returns Значение свойства состояния, на которое указывает ключ `k`.
     */
    (store.use as any)[k] = () => store((s) => s[k as keyof typeof s]);
  }

  return store;
};

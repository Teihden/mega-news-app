import { SESSION_STORAGE_KEY } from "../config";

/**
 * Функция для получения начальных значений из sessionStorage.
 * @returns Объект с извлечёнными данными или значение по умолчанию { email: "" }.
 */
export const getSessionStorageInitialValues = () => {
  try {
    const data = sessionStorage.getItem(SESSION_STORAGE_KEY);
    return data ? JSON.parse(data) : { email: "" };
  } catch {
    return { email: "" };
  }
};

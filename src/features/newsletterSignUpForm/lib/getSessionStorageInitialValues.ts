import { SESSION_STORAGE_KEY } from "../config";

/**
 * Reads the newsletter form initial values from `sessionStorage`.
 * @returns Parsed stored values or the default value `{ email: "" }`.
 */
export const getSessionStorageInitialValues = () => {
  try {
    const data = sessionStorage.getItem(SESSION_STORAGE_KEY);
    return data ? JSON.parse(data) : { email: "" };
  } catch {
    return { email: "" };
  }
};

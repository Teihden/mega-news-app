import { object, string } from "yup";

/**
 * Объект validationSchema используется для определения валидации данных.
 */
export const validationSchema = object({
  email: string()
    .email("Enter the correct email address")
    .required("Enter your email address"),
});

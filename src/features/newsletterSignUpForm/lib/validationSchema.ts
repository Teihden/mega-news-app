import { object, string } from "yup";

/**
 * Объект validationSchema используется для определения валидации данных.
 */
export const getValidationSchema = (messages: {
  invalidEmail: string;
  requiredEmail: string;
}) => object({
  email: string()
    .email(messages.invalidEmail)
    .required(messages.requiredEmail),
});

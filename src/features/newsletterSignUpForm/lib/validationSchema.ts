import { object, string } from "yup";

/**
 * Объект validationSchema используется для определения валидации данных.
 * @param messages
 * @param messages.invalidEmail
 * @param messages.requiredEmail
 */
export const getValidationSchema = (messages: {
  invalidEmail: string;
  requiredEmail: string;
}) => object({
  email: string()
    .email(messages.invalidEmail)
    .required(messages.requiredEmail),
});

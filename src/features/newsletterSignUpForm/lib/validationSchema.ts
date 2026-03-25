import { object, string } from "yup";

/**
 * Создает схему валидации формы подписки с локализованными сообщениями.
 * @param messages - Набор локализованных сообщений валидации.
 * @param messages.invalidEmail - Сообщение для невалидного адреса email.
 * @param messages.requiredEmail - Сообщение для пустого поля email.
 * @returns Схема Yup для валидации формы подписки.
 */
export const getValidationSchema = (messages: {
  invalidEmail: string;
  requiredEmail: string;
}) => object({
  email: string()
    .email(messages.invalidEmail)
    .required(messages.requiredEmail),
});

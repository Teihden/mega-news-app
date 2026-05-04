import { object, string } from "yup";

/**
 * Creates the newsletter form validation schema with localized messages.
 * @param messages - Localized validation messages.
 * @param messages.invalidEmail - Message used for an invalid email address.
 * @param messages.requiredEmail - Message used when the email field is empty.
 * @returns Yup schema for newsletter form validation.
 */
export const getValidationSchema = (messages: {
  invalidEmail: string;
  requiredEmail: string;
}) => object({
  email: string()
    .email(messages.invalidEmail)
    .required(messages.requiredEmail),
});

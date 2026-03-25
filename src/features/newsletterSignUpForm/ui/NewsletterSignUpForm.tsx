import { type INewsletterSignUpFormFormik, type INewsletterSignUpFormProps, type INewsletterSignUpFormReq, SESSION_STORAGE_KEY } from "../config";
import * as S from "./styles";
import { type FC, useEffect } from "react";
import { getSessionStorageInitialValues, getValidationSchema } from "../lib";
import { ErrorMessage, Field, Formik } from "formik";
import { Input } from "@shared/ui/input";
import { Btn } from "@shared/ui/btn";
import IconMail from "@shared/assets/images/icons/icon-mail.svg?react";
import toast from "react-hot-toast";
import { useSubscribeNewsletterMutation } from "@shared/api";
import { useTranslation } from "react-i18next";

/**
 * Компонент NewsletterSignUpForm.
 * Этот компонент представляет собой форму подписки на рассылку.
 * @returns Возвращает компонент.
 */
export const NewsletterSignUpForm: FC<INewsletterSignUpFormProps> = () => {
  const [ subscribeNewsletter ] = useSubscribeNewsletterMutation();
  const { t } = useTranslation([ "common", "features" ]);
  const validationSchema = getValidationSchema({
    invalidEmail: t("newsletter.invalidEmail", { ns: "features" }),
    requiredEmail: t("newsletter.requiredEmail", { ns: "features" }),
  });

  return (
    <Formik<INewsletterSignUpFormFormik>
      initialValues={getSessionStorageInitialValues()}
      enableReinitialize={true}
      validationSchema={validationSchema}
      onSubmit={async (values, { resetForm }) => {
        const formData = new FormData();
        formData.append("email", values.email);

        return await toast.promise(
          subscribeNewsletter(formData as INewsletterSignUpFormReq).unwrap()
            .then((data) => {
              if (data.status === 200) {
                sessionStorage.removeItem(SESSION_STORAGE_KEY);
                resetForm();

                return data;
              } else {
                throw data;
              }
            })
            .catch((err) => {
              console.error("Network error", err);
              throw ({ message: t("newsletter.networkError", { ns: "features" }), ...err.data });
            }), {
            loading: t("loading", { ns: "common" }),
            /* eslint-disable jsdoc/require-jsdoc */
            success: ({ message }) => message ? message : t("newsletter.success", { ns: "features" }),
            error: ({ message }) => message ? message : t("errorOccurred", { ns: "common" }),
            /* eslint-enable jsdoc/require-jsdoc */
          },
        );
      }}
    >
      {({ touched, errors, values, isSubmitting }) => {
        useEffect(() => {
          sessionStorage.setItem(SESSION_STORAGE_KEY, JSON.stringify(values));
        }, [ values ]);

        return (
          <S.Form>
            <label
              className={"visually-hidden"}
              htmlFor={"email"}
            >
              {t("newsletter.emailLabel", { ns: "features" })}
            </label>
            <Field
              id={"email"}
              name={"email"}
              type={"email"}
              variant={"secondary"}
              componentSize={"md"}
              placeholder={t("newsletter.emailPlaceholder", { ns: "features" })}
              title={t("newsletter.emailTitle", { ns: "features" })}
              autoComplete={"email"}
              as={Input}
              isInvalid={touched.email && errors.email}
            />
            <ErrorMessage
              name={"email"}
              component={S.ErrorMessage}
            />
            <Btn
              variant={"blank"}
              size={"md"}
              iconSize={24}
              icon={<IconMail />}
              isSquare={true}
              type={"submit"}
              disabled={isSubmitting || Object.keys(errors).length > 0}
              title={t("newsletter.submitTitle", { ns: "features" })}
            />
          </S.Form>
        );
      }}
    </Formik>
  );
};

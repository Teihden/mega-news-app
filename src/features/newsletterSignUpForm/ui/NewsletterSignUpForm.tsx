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
 * Renders the newsletter subscription form.
 * @returns Newsletter sign-up form component.
 */
export const NewsletterSignUpForm: FC<INewsletterSignUpFormProps> = () => {
  const [ subscribeNewsletter ] = useSubscribeNewsletterMutation();
  const { t: tCommon } = useTranslation("common");
  const { t: tFeatures } = useTranslation("features");
  const validationSchema = getValidationSchema({
    invalidEmail: tFeatures(($) => $.newsletter.invalidEmail),
    requiredEmail: tFeatures(($) => $.newsletter.requiredEmail),
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
              throw ({ message: tFeatures(($) => $.newsletter.networkError), ...err.data });
            }), {
            loading: tCommon(($) => $.loading),
            /* eslint-disable jsdoc/require-jsdoc */
            success: ({ message }) => message ? message : tFeatures(($) => $.newsletter.success),
            error: ({ message }) => message ? message : tCommon(($) => $.errorOccurred),
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
              {tFeatures(($) => $.newsletter.emailLabel)}
            </label>
            <Field
              id={"email"}
              name={"email"}
              type={"email"}
              variant={"secondary"}
              componentSize={"md"}
              placeholder={tFeatures(($) => $.newsletter.emailPlaceholder)}
              title={tFeatures(($) => $.newsletter.emailTitle)}
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
              title={tFeatures(($) => $.newsletter.submitTitle)}
            />
          </S.Form>
        );
      }}
    </Formik>
  );
};

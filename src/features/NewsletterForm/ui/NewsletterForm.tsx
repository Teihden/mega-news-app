import { type INewsletterFormik, type INewsletterFormProps } from "../config";
import * as S from "./styles";
import { type FC } from "react";
import { validationSchema } from "../lib";
import { ErrorMessage, Field, Formik } from "formik";
import { Input } from "@shared/ui/Input";
import { Btn } from "@shared/ui/Btn";
import IconMail from "@shared/assets/images/icons/icon-mail.svg?react";
import { PUBLIC_URLS } from "@shared/config/constants";
import toast from "react-hot-toast";

/**
 * Компонент NewsletterForm.
 * Этот компонент представляет собой форму подписки на рассылку.
 * @returns Возвращает компонент.
 */
export const NewsletterForm: FC<INewsletterFormProps> = () => {
  return (
    <Formik<INewsletterFormik>
      initialValues={{
        email: "",
      }}
      validationSchema={validationSchema}
      onSubmit={async (values, { resetForm }) => {
        return await toast.promise(
          async () => {
            const formData = new FormData();
            formData.append("email", values.email);
            let response: Response;

            try {
              response = await fetch(PUBLIC_URLS.forms.newsletter, {
                method: "POST",
                body: formData,
              });
            } catch (err) {
              console.error("Network error", err);
              throw { message: "Network error. Please check your connection." };
            }

            let data;
            try {
              data = await response.json();
            } catch {
              throw { message: "Server error. Invalid server response." };
            }

            if (data.isSuccess) {
              resetForm();
              return data;
            } else {
              throw data;
            }
          }, {
            loading: "Loading",
            /* eslint-disable jsdoc/require-jsdoc */
            success: ({ message }) => message ? message : "Subscribed successfully",
            error: ({ message }) => message ? message : "An error has occurred",
            /* eslint-enable jsdoc/require-jsdoc */
          },
        );
      }}
    >
      {({ isSubmitting }) => (
        <S.Form>
          <Field
            name={"email"}
            variant={"secondary"}
            componentSize={"md"}
            placeholder={"Write your email..."}
            as={Input}
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
            disabled={isSubmitting}
          />
        </S.Form>
      )}
    </Formik>
  );
};

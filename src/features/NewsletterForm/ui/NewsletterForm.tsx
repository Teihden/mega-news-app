import { type INewsletterFormik, type INewsletterFormProps, type INewsletterFormReq } from "../config";
import * as S from "./styles";
import { type FC } from "react";
import { validationSchema } from "../lib";
import { ErrorMessage, Field, Formik } from "formik";
import { Input } from "@shared/ui/Input";
import { Btn } from "@shared/ui/Btn";
import IconMail from "@shared/assets/images/icons/icon-mail.svg?react";
import toast from "react-hot-toast";
import { useSubscribeNewsletterMutation } from "@shared/api";

/**
 * Компонент NewsletterForm.
 * Этот компонент представляет собой форму подписки на рассылку.
 * @returns Возвращает компонент.
 */
export const NewsletterForm: FC<INewsletterFormProps> = () => {
  const [ subscribeNewsletter ] = useSubscribeNewsletterMutation();

  return (
    <Formik<INewsletterFormik>
      initialValues={{
        email: "",
      }}
      validationSchema={validationSchema}
      onSubmit={async (values, { resetForm }) => {
        const formData = new FormData();
        formData.append("email", values.email);

        return await toast.promise(
          subscribeNewsletter(formData as INewsletterFormReq).unwrap()
            .then((data) => {
              if (data.status === 200) {
                resetForm();
                return data;
              } else {
                throw data;
              }
            })
            .catch((err) => {
              console.error("Network error", err);
              throw ({ message: "Network error. Please check your connection.", ...err.data });
            }), {
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

import { type INewsletterFormik, type INewsletterFormProps } from "../config";
import * as S from "./styles";
import { type FC } from "react";
import { validationSchema } from "../lib";
import { ErrorMessage, Field, Formik } from "formik";
import { Input } from "@shared/ui/Input";
import { Btn } from "@shared/ui/Btn";
import IconMail from "@shared/assets/images/icons/icon-mail.svg?react";

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
      onSubmit={(values, { resetForm }) => {
        console.debug("Submit:", values);
        resetForm();
      }}
    >
      {() => (
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
          />
        </S.Form>
      )}
    </Formik>
  );
};

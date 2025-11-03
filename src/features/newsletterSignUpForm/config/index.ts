export interface INewsletterSignUpFormProps {}

export interface INewsletterSignUpFormFormik {
  email: string;
}

export interface INewsletterSignUpFormResp {
  status?: number;
  message?: string;
}

export interface INewsletterSignUpFormReq {
  email?: string;
}

export const SESSION_STORAGE_KEY = "NewsletterSignUpForm";

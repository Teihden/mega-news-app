export interface INewsletterFormProps {}

export interface INewsletterFormik {
  email: string;
}

export interface INewsletterFormResp {
  status?: number;
  message?: string;
}

export interface INewsletterFormReq {
  email?: string;
}

export const SESSION_STORAGE_KEY = "newsletterForm";

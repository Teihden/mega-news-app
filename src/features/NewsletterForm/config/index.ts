export interface INewsletterFormProps {}

export interface INewsletterFormik {
  email: string;
}

export interface INewsletterResp {
  status?: number;
  message?: string;
}

export interface INewsletterFormReq {
  email?: string;
}

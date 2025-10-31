import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { INewsletterFormReq, INewsletterResp } from "@features/NewsletterForm";
import { API_URL, API_ENDPOINTS } from "@shared/config/constants";

/* eslint-disable jsdoc/require-jsdoc */

export const apiClient = createApi({
  reducerPath: "apiClient",
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  endpoints: (builder) => ({
    subscribeNewsletter: builder.mutation<INewsletterResp, INewsletterFormReq>({
      query: (body) => ({
        url: API_ENDPOINTS.forms.newsletter,
        method: "POST",
        body,
      }),
    }),
  }),
});

/* eslint-enable jsdoc/require-jsdoc */

export const {
  useSubscribeNewsletterMutation,
} = apiClient;

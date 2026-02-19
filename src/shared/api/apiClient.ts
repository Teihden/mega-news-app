import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { INewsletterSignUpFormReq, INewsletterSignUpFormResp } from "@features/newsletterSignUpForm";
import { API_URL, API_ENDPOINTS } from "@shared/config/constants";
import type { ICommentsResp } from "@shared/types";
import type { IPostsResp, IUpdatePostReq, IUpdatePostResp } from "@entities/postCard";

/* eslint-disable jsdoc/require-jsdoc */

export const apiClient = createApi({
  reducerPath: "apiClient",
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  endpoints: (builder) => ({
    subscribeNewsletter: builder.mutation<INewsletterSignUpFormResp, INewsletterSignUpFormReq>({
      query: (body) => ({
        url: API_ENDPOINTS.forms.newsletter,
        method: "POST",
        body,
      }),
    }),
    getComments: builder.query<ICommentsResp, number>({
      query: (limit = 4) => ({
        url: `${API_ENDPOINTS.comments}&limit=${limit}`,
        method: "GET",
      }),
    }),
    getPosts: builder.query<IPostsResp, undefined | number>({
      query: (limit = 8) => ({
        url: `${API_ENDPOINTS.posts.all}&limit=${limit}`,
        method: "GET",
      }),
    }),
    updatePost: builder.mutation<IUpdatePostResp, IUpdatePostReq>({
      query: ({ id, reactions }) => ({
        url: API_ENDPOINTS.posts.updatePosts(id),
        method: "PUT",
        body: { reactions },
      }),
      async onQueryStarted({ id: postId }, lifecycleApi) {
        const cachedArgs = apiClient.util.selectCachedArgsForQuery(lifecycleApi.getState(), "getPosts");
        const patchResults = cachedArgs.map((arg) => {
          return lifecycleApi.dispatch(
            apiClient.util.updateQueryData("getPosts", arg, (draft) => {
              const post = draft.posts.find((p) => p.id === postId);
              if (post && post.reactions.likes) {
                post.reactions.likes += 1;
              }
            }),
          );
        },
        );

        try {
          await lifecycleApi.queryFulfilled;
        } catch {
          patchResults.forEach((p) => p.undo());
        }
      },
    }),
  }),
});

/* eslint-enable jsdoc/require-jsdoc */

export const {
  useSubscribeNewsletterMutation,
  useGetCommentsQuery,
  useGetPostsQuery,
  useUpdatePostMutation,
} = apiClient;

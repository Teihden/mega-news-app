import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { INewsletterSignUpFormReq, INewsletterSignUpFormResp } from "@features/newsletterSignUpForm";
import { API_URL, API_ENDPOINTS } from "@shared/config/constants";
import type { IUpdatePostReq, IUpdatePostResp } from "@entities/postCard";
import type { ICommentsReq, ICommentsResp } from "@widgets/footer";
import type { IPostsReq, IPostsResp } from "@entities/postCardContainer";

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
    getComments: builder.query<ICommentsResp, ICommentsReq>({
      query: ({ limit = 4 }) => ({
        url: `${API_ENDPOINTS.comments}${limit ? `&limit=${limit}` : ""}`,
        method: "GET",
      }),
    }),
    getPosts: builder.query<IPostsResp, IPostsReq>({
      query: ({ limit = 8 }) => ({
        url: `${API_ENDPOINTS.posts.all}${limit ? `&limit=${limit}` : ""}`,
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

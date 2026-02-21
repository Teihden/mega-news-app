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
      query: ({ limit = 4, skip = 0 }) => ({
        url: `${API_ENDPOINTS.comments}${limit ? `&limit=${limit}` : ""}${skip ? `&skip=${skip}` : ""}`,
        method: "GET",
      }),
      serializeQueryArgs: ({ endpointName }) => endpointName,
      merge: (currentCache, newData) => {
        currentCache.comments?.push(...newData.comments ?? []);
        currentCache.total = newData.total ?? 0;
        currentCache.skip = newData.skip ?? 0;
        currentCache.limit = newData.limit ?? 0;
      },
      forceRefetch: ({ currentArg, previousArg }) => currentArg?.skip !== previousArg?.skip || currentArg?.limit !== previousArg?.limit,
    }),
    getPosts: builder.query<IPostsResp, IPostsReq>({
      query: ({ limit = 8, skip = 0 }) => ({
        url: `${API_ENDPOINTS.posts.all}${limit ? `&limit=${limit}` : ""}${skip ? `&skip=${skip}` : ""}`,
        method: "GET",
      }),
      serializeQueryArgs: ({ endpointName }) => endpointName,
      merge: (currentCache, newData) => {
        currentCache.posts?.push(...newData.posts ?? []);
        currentCache.total = newData.total ?? 0;
        currentCache.skip = newData.skip ?? 0;
        currentCache.limit = newData.limit ?? 0;
      },
      forceRefetch: ({ currentArg, previousArg }) => currentArg?.skip !== previousArg?.skip || currentArg?.limit !== previousArg?.limit,
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

/* eslint-disable jsdoc/require-jsdoc */
import { configureStore } from "@reduxjs/toolkit";
import { apiClient } from "@shared/api";

export const reduxStore = configureStore({
  reducer: {
    [apiClient.reducerPath]: apiClient.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiClient.middleware),
});

export type TReduxStore = typeof reduxStore;
export type TReduxDispatch = typeof reduxStore.dispatch;

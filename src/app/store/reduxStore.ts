import { configureStore } from "@reduxjs/toolkit";
import { apiClient } from "@shared/api";

/* eslint-disable jsdoc/require-jsdoc */

export const reduxStore = configureStore({
  reducer: {
    [apiClient.reducerPath]: apiClient.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiClient.middleware),
});

export type TReduxStore = typeof reduxStore;
export type TReduxDispatch = typeof reduxStore.dispatch;

/* eslint-enable jsdoc/require-jsdoc */

import axios from "axios";
import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { authReducer, refreshTokens } from "./auth/slice";
import { boardsReducer } from "./boards/slice";
import { setAuthHeader } from "./auth/operations";

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

const authPersistConfig = {
  key: "auth",
  storage,
  whitelist: ["token", "refreshToken"],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    boards: boardsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: process.env.NODE_ENV === "development",
});

axios.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response.status == 401) {
      try {
        const { refreshToken } = store.getState().auth;
        const { data } = await axios.post("/user/refresh", { refreshToken });
        setAuthHeader(data.token);
        store.dispatch(refreshTokens(data));
        error.config.headers.authorization = `Bearer ${data.token}`;
        return axios.request(error.config);
      } catch (error) {
        return Promise.reject(error);
      }
    }
    return Promise.reject(error);
  }
);

export const persistor = persistStore(store);

import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { authReducer } from "./auth/slice";
import { boardsReducer } from "./boards/slice";
import { setupAxiosInterceptors } from "api/axiosSettings";

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

setupAxiosInterceptors(store);

export const persistor = persistStore(store);

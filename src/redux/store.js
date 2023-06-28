import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { authReducer } from './auth/slice';
import { boardsReducer } from "./boards/slice";

// import {
//     FLUSH,
//     REHYDRATE,
//     PAUSE,
//     PERSIST,
//     PURGE,
//     REGISTER,
//   } from 'redux-persist';

//   const middleware = [
//     ...getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }),
//   ];

  export const store = configureStore({
    reducer: {
        auth: authReducer,
        boards: boardsReducer
    },
    // middleware,
    // devTools: process.env.NODE_ENV === 'development',
});

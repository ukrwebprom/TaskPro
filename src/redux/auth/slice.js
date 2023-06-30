import { createSlice } from "@reduxjs/toolkit";
import { login, register, logout, getMe, updTheme } from "../auth/operations";

const handlePending = (state) => {
  state.isRefreshing = true;
};

const handleRejected = (state, action) => {
  state.error = action.payload;
  state.isRefreshing = false;
};

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: {
      name: null,
      email: null,
      theme: "dark",
      avatar: null,
    },
    token: null,
    refreshToken: null,
    error: null,
    isLoggedIn: null,
    isRefreshing: false,
  },
  reducers: {
    refreshTokens: (state, action) => {
      state.token = action.payload.token;
      state.refreshToken = action.payload.refreshToken;
    },
    resetIsLoggedIn: (state, action) => {
      state.isLoggedIn = false;
      state.isRefreshing = false;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(register.fulfilled, (state, action) => {
        // state.user = action.payload.user;
      })
      .addCase(register.pending, handlePending)
      .addCase(register.rejected, handleRejected)
      .addCase(login.fulfilled, (state, action) => {
        state.user.name = action.payload.name;
        state.user.theme = action.payload.theme;
        state.user.avatar = action.payload.avatar;
        state.token = action.payload.token;
        state.refreshToken = action.payload.refreshToken;
        state.isLoggedIn = true;
        state.error = null;
      })
      .addCase(login.pending, handlePending)
      .addCase(login.rejected, handleRejected)

      // .addCase(refresh.fulfilled, (state, action) => {
      //   state.token = action.payload.token;
      //   state.refreshToken = action.payload.refreshToken;
      // })
      // .addCase(refresh.pending, handlePending)
      // .addCase(refresh.rejected, (state, action) => {
      //   state.error = action.payload;
      //   state.isLoggedIn = false;
      // })

      .addCase(logout.fulfilled, (state, action) => {
        state.user = {
          name: null,
          email: null,
          theme: "dark",
          avatar: null,
        };
        state.token = null;
        state.refreshToken = null;
        state.isLoggedIn = false;
        state.isRefreshing = false;
        state.error = null;
      })
      .addCase(getMe.pending, handlePending)
      .addCase(getMe.fulfilled, (state, action) => {
        state.user.name = action.payload.name;
        state.user.email = action.payload.email;
        state.user.theme = action.payload.theme;
        state.user.avatar = action.payload.avatar;
        state.isLoggedIn = true;
        state.error = null;
      })
      .addCase(getMe.rejected, (state, action) => {
        state.isLoggedIn = false;
        state.isRefreshing = false;
      })
      .addCase(updTheme.fulfilled, (state, action) => {
        state.user.theme = action.payload.theme;
      })
      .addCase(updTheme.pending, handlePending)
      .addCase(updTheme.rejected, handleRejected),
});

export const { refreshTokens, resetIsLoggedIn } = authSlice.actions;
export const authReducer = authSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
import {login, register, logout, getMe, updTheme} from '../auth/operations';

const handlePending = state => {
    state.isRefreshing = true;
  };
  
  const handleRejected = (state, action) => {
    state.error = action.payload;
    console.log(action.payload)
    state.isRefreshing = false;
  };

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user:{
            name: null,
            email: null,
            theme: 'dark',
            avatar: null,
        },
        token: null,
        error: null,
        isLoggedIn: null,
        isRefreshing: false
    },extraReducers: builder =>
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
        state.isLoggedIn = true;
        state.error = null;
      })
      .addCase(login.pending, handlePending)
      .addCase(login.rejected, handleRejected)
      .addCase(logout.fulfilled, (state, action) => {
        state.user = { 
            name: null,
            email: null,
            theme: 'dark',
            avatar: null
        };
        state.token = null;
        state.isLoggedIn = false;
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
      .addCase(updTheme.fulfilled, (state, action) => {
        state.user.theme = action.payload.theme;
      })
      .addCase(updTheme.pending, handlePending)
      .addCase(updTheme.rejected, handleRejected)
});

export const authReducer = authSlice.reducer;
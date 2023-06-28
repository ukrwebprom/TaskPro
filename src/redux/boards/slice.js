import { createSlice } from "@reduxjs/toolkit";
import {fetchBoards, getBoard, deleteBoard } from '../boards/operations';

const handlePending = state => {
    // state.isRefreshing = true;
  };
  
  const handleRejected = (state, action) => {
    state.error = action.payload;
    state.isRefreshing = false;
  };

const boardsSlice = createSlice({
    name: 'boards',
    initialState: {
      items: [],
      isLoading: false,
      error: null,
    },extraReducers: builder =>
    builder
      .addCase(fetchBoards.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchBoards.pending, handlePending)
      .addCase(fetchBoards.rejected, handleRejected)
      .addCase(getBoard.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;

      })
      .addCase(getBoard.pending, handlePending)
      .addCase(getBoard.rejected, handleRejected)
      .addCase(deleteBoard.pending, handlePending)
      .addCase(deleteBoard.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const index = state.items.findIndex(
          board => board._id === action.payload.id
        );
        state.items.splice(index, 1);
      }).addCase(deleteBoard.rejected, handleRejected)
});

export const boardsReducer = boardsSlice.reducer;
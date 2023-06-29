import { createSlice } from "@reduxjs/toolkit";
import {fetchBoards, addBoard, deleteBoard,updateBoardById, updateBoardBgById } from '../boards/operations';

const handlePending = state => {
    state.isLoading = true;
  };
  
  const handleRejected = (state, action) => {
    state.error = action.payload;
    state.isLoading = false;
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
      .addCase(addBoard.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items.push(action.payload);
      })
      .addCase(addBoard.pending, handlePending)
      .addCase(addBoard.rejected, handleRejected)
      .addCase(updateBoardById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const index = state.items.findIndex(
          board => board._id === action.payload.id
        );

        state.items[index] = action.payload;
      })
      .addCase(updateBoardById.pending, handlePending)
      .addCase(updateBoardById.rejected, handleRejected)
      .addCase(updateBoardBgById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const index = state.items.findIndex(
          board => board._id === action.payload.id
        );

        state.items[index] = action.payload;
      })
      .addCase(updateBoardBgById.pending, handlePending)
      .addCase(updateBoardBgById.rejected, handleRejected)
      .addCase(deleteBoard.pending, handlePending)
      .addCase(deleteBoard.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const index = state.items.findIndex(
          board => board._id === action.payload.id
        );
        state.items.splice(index, 1);
      }).addCase(deleteBoard.rejected, handleRejected)
        // .addCase(getBoard.fulfilled, (state, action) => {
      //   state.isLoading = false;
      //   state.error = null;

      // })
      // .addCase(getBoard.pending, handlePending)
      // .addCase(getBoard.rejected, handleRejected)
});

export const boardsReducer = boardsSlice.reducer;
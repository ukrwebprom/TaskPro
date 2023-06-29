import { createSlice } from "@reduxjs/toolkit";
import {fetchBoards, addBoard, deleteBoard,updateBoardById, updateBoardBgById, addTask, addColumn,updateColumnTitle,deleteColumn } from '../boards/operations';

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
      currentBoard: null,
    },
    reducers: {
      selectBoard(state, action) {
        state.currentBoard = action.payload;
      }
    },
    extraReducers: builder =>
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
        state.items.push({...action.payload, columns:[]});
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
      if(state.items.length === 0) {
        state.currentBoard = null;
      }
      state.currentBoard = 0;
      }).addCase(deleteBoard.rejected, handleRejected)
      .addCase(addColumn.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items[state.currentBoard].columns.push(action.payload);
      })
      .addCase(addColumn.pending, handlePending)
      .addCase(addColumn.rejected, handleRejected)
      .addCase(updateColumnTitle.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const index = state.items[state.currentBoard].columns.findIndex(
          column => column._id === action.payload.id
        );

        state.items[state.currentBoard].columns[index] = action.payload;
      })
      .addCase(updateColumnTitle.pending, handlePending)
      .addCase(updateColumnTitle.rejected, handleRejected)
      .addCase(deleteColumn.pending, handlePending)
      .addCase(deleteColumn.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const index = state.items[state.currentBoard].columns.findIndex(
          column => column._id === action.payload.id
        );
        state.items[state.currentBoard].columns.splice(index, 1);
      }).addCase(deleteColumn.rejected, handleRejected)
      .addCase(addTask.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;

        const index = state.items[state.currentBoard].columns.findIndex(
          column => column._id === action.payload.id
        );

        state.items[state.currentBoard].columns[index].tasks.push(action.payload);
      })
      .addCase(addTask.pending, handlePending)
      .addCase(addTask.rejected, handleRejected)
        // .addCase(getBoard.fulfilled, (state, action) => {
      //   state.isLoading = false;
      //   state.error = null;

      // })
      // .addCase(getBoard.pending, handlePending)
      // .addCase(getBoard.rejected, handleRejected)
});

export const { selectBoard } = boardsSlice.actions;
export const boardsReducer = boardsSlice.reducer;
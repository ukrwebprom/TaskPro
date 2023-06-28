import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

/*
 * GET @ /boards
 * headers: Authorization: Bearer token
 */
export const fetchBoards = createAsyncThunk(
    'boards/fetchBoards',
    async (_, thunkAPI) => {
      try {
        const res = await axios.get('/boards');
        return res.data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );

  /*
 * GET @ /boards/:id
 * headers: Authorization: Bearer token
 */

  export const getBoard = createAsyncThunk(
    'boards/getBoard',
    async (id, thunkAPI) => {
      try {
        const res = await axios.get(`/boards/${id}`);
        return res.data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );


    /*
 * DELETE @ /boards/:id
 * headers: Authorization: Bearer token
 */

    export const deleteBoard = createAsyncThunk(
        'boards/deleteBoard',
        async (id, thunkAPI) => {
          try {
            const res = await axios.delete(`/boards/${id}`);
            return res.data;
          } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
          }
        }
      );
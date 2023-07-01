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
 * POST @ /boards
 * headers: Authorization: Bearer token
 */
  export const addBoard = createAsyncThunk(
    'boards/addBoard',
    async (body, thunkAPI) => {
      try {
        const response = await axios.post('/boards', { ...body });
        return { ...body, ...response.data };
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );

/*
 * PUT @ /boards
 * headers: Authorization: Bearer token
 */
  export const updateBoardById = createAsyncThunk(
    'boards/updateBoardById',
    async (board, thunkAPI) => {
      const { _id, title, icon, background } = board;
  
      try {
        const { data } = await axios.put(`/boards/${_id}`, {
          title,
          icon,
          background,
        });
        return data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );

/*
 * PATCH @ /boards
 * headers: Authorization: Bearer token
 */
   export const updateBoardBgById = createAsyncThunk(
    'boards/updateBoardBgById',
    async (board, thunkAPI) => {
      const { _id, background } = board;
  
      try {
        const { data } = await axios.patch(`/boards/${_id}`, {
          background,
        });
        return data;
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
        async (_id, thunkAPI) => {
          try {
            const res = await axios.delete(`/boards/${_id}`);
            return res.data;
          } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
          }
        }
      );


/*
 * POST @ /columns/:id/tasks
 * headers: Authorization: Bearer token
 */
export const addTask = createAsyncThunk(
  'boards/addTask',
  async ({_id,body}, thunkAPI) => {
    try {
      const response = await axios.post(`/columns/${_id}/tasks`, { ...body });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);


/*
 * POST @ /columns
 * headers: Authorization: Bearer token
 */
export const addColumn = createAsyncThunk(
  'boards/addColumn',
  async (body, thunkAPI) => {
    try {
      const response = await axios.post('/columns', { ...body });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

/*
 * PATCH @ /columns/:id
 * headers: Authorization: Bearer token
 */
export const updateColumnTitle = createAsyncThunk(
  'boards/updateColumnTitle',
  async (column, thunkAPI) => {
    const { _id, title } = column;
    try {
      await axios.patch(`/columns/${_id}`, {
        title,
      });
      return column;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

    /*
 * DELETE @ /columns/:id
 * headers: Authorization: Bearer token
 */

    export const deleteColumn = createAsyncThunk(
      'boards/deleteColumn',
      async (_id, thunkAPI) => {
        try {
          const res = await axios.delete(`/columns/${_id}`);
          return res.data;
        } catch (error) {
          return thunkAPI.rejectWithValue(error.message);
        }
      }
);

/*
 * POST @ /columns/:id/tasks
 * headers: Authorization: Bearer token
 */
export const addTask = createAsyncThunk(
  'boards/addTask',
  async ({_id,body}, thunkAPI) => {
    try {
      const response = await axios.post(`/columns/${_id}/tasks`, { ...body });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

/*
 * PUT @ /tasks/:id
 * headers: Authorization: Bearer token
 */
export const updateTask = createAsyncThunk(
  'boards/updateTask',
  async (task, thunkAPI) => {
    const { _id, title, description, deadline, priority, column } = task;

    try {
      const { data } = await axios.put(`/tasks/${_id}`, {
        title,
        description, 
        deadline, 
        priority, 
        column
      });
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

/*
 * PATCH @ /tasks/:id
 * headers: Authorization: Bearer token
 */
export const updateTaskPlace = createAsyncThunk(
  'boards/updateTaskPlace',
  async (task, thunkAPI) => {
    const { _id, column } = task;

    try {
      const { data } = await axios.patch(`/tasks/${_id}`, {
        column,
      });
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

    /*
 * DELETE @ /tasks/:id
 * headers: Authorization: Bearer token
 */
  export const deleteTask = createAsyncThunk(
      'boards/deleteTask',
      async (_id, thunkAPI) => {
        try {
          const res = await axios.delete(`/tasks/${_id}`);
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

  // export const getBoard = createAsyncThunk(
  //   'boards/getBoard',
  //   async (id, thunkAPI) => {
  //     try {
  //       const res = await axios.get(`/boards/${id}`);
  //       return res.data;
  //     } catch (error) {
  //       return thunkAPI.rejectWithValue(error.message);
  //     }
  //   }
  // );


/*
 * PATCH @ /tasks/:id
 * headers: Authorization: Bearer token
 */

/*   export const moveTaskToOtherColumn = createAsyncThunk(
    'tasks/',
    async ({ colomnId, taskId }, thunkAPI) => {
      try {
        await axios.patch(taskId, {
          column: colomnId,
        });
        return { colomnId, taskId };
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  ); */
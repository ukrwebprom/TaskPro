import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://taskpro-41yf.onrender.com';

// Utility to add JWT
const setAuthHeader = token => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

// Utility to remove JWT
const clearAuthHeader = ()=>{
    axios.defaults.headers.common.Authorization = '';
}

/*
 * POST @ /user/login
 * body: { email, password }
 */

export const login = createAsyncThunk(
    'auth/login',
    async (credentials, thunkAPI)=>{
        try {
            const resp = await axios.post('/user/login', credentials);

            // After successful login, add the token to the HTTP header
            setAuthHeader(resp.data.token)
            return resp.data; 
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);


/*
 * POST @ /user/register
 * body: { name, email, password }
 */

export const register = createAsyncThunk(
    'auth/register',
    async (data, thunkAPI) => {
      try {
        await axios.post('/user/register', data);
        await login({email: data.email, password: data.password});
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
);

/*
 * POST @ /user/logout
 * headers: Authorization: Bearer token
 */
export const logout = createAsyncThunk(
    'auth/logout',
    async (_, thunkAPI)=>{
        try {
            await axios.post('/user/logout');
             // After a successful logout, remove the token from the HTTP header
            clearAuthHeader();

        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);




/*
 * PATCH @ /user/theme
 * headers: Authorization: Bearer token
 */

export const updTheme = createAsyncThunk(
    'auth/updTheme',
    async (theme, thunkAPI) => {
      try {
        const { data } = await axios.patch('user/theme', {
          theme
        });
        console.log(data);
        return data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );


/* REFRESH user 
 * GET @ /user/me
 * headers: Authorization: Bearer token
 */
export const getMe = createAsyncThunk(
  'auth/getMe',
    async (_, thunkAPI)=>{
        // Reading the token from the state via getState()
        const {token} = thunkAPI.getState().auth;
        if(!token){
              // If there is no token, exit without performing any request
            return thunkAPI.rejectWithValue('No valid token');
        }
        
        try {
             // If there is a token, add it to the HTTP header and perform the request
            setAuthHeader(token);
            const resp = await axios.get('/user/me');
            return resp.data;

        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

/*
 * GET @ /user/me
 * headers: Authorization: Bearer token
 */
// export const getMe = createAsyncThunk('auth/getMe', async(_, thunkAPI) =>{
//   const {token} = thunkAPI.getState().auth;
//   try {
//       setAuthHeader(token);
//       const res = await axios.get('/user/me');
//       return res.data;
//   } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//   }
// });
import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { clearAuthHeader, setAuthHeader } from "api/axiosSettings";

/*
 * POST @ /user/login
 * body: { email, password }
 */

export const login = createAsyncThunk(
  "auth/login",
  async (credentials, thunkAPI) => {
    try {
      const resp = await axios.post("/user/login", credentials);
      // After successful login, add the token to the HTTP header
      setAuthHeader(resp.data.token);
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

/*
 * POST @ /user/refresh
 * body: { email, password }
 */

// export const refresh = createAsyncThunk(
//   "auth/refresh",
//   async (refreshToken, thunkAPI) => {
//     try {
//       const resp = await axios.post("/user/refresh", { refreshToken });

//       // After successful login, add the token to the HTTP header
//       setAuthHeader(resp.data.token);
//       return resp.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.response.data.message);
//     }
//   }
// );

/*
 * POST @ /user/register
 * body: { name, email, password }
 */

/* export const register = createAsyncThunk(
  "auth/register",
  async (data, thunkAPI) => {
    try {
      await axios.post("/user/register", data);
      console.log("try to login");
      login({ email: data.email, password: data.password });
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
); */

/*
 * POST @ /user/logout
 * headers: Authorization: Bearer token
 */
export const logout = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  try {
    await axios.post("/user/logout");
    // After a successful logout, remove the token from the HTTP header
    clearAuthHeader();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

/*
 * PATCH @ /user/theme
 * headers: Authorization: Bearer token
 */

export const updTheme = createAsyncThunk(
  "auth/updTheme",
  async (theme, thunkAPI) => {
    try {
      const { data } = await axios.patch("user/theme", {
        theme,
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
export const getMe = createAsyncThunk("auth/getMe", async (_, thunkAPI) => {
  // Reading the token from the state via getState()
  const { token } = thunkAPI.getState().auth;
  if (!token) {
    // If there is no token, exit without performing any request
    return thunkAPI.rejectWithValue("No valid token");
  }

  try {
    // If there is a token, add it to the HTTP header and perform the request
    setAuthHeader(token);
    const resp = await axios.get("/user/me");
    return resp.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

/*
 * PUT @ /user/update
 * headers: Authorization: Bearer token
*/
  export const updateProfile = createAsyncThunk(
    'user/updateProfile',
    async (body, thunkAPI) => {
      try {
       await axios.put("/user/update", body);
        return body;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );


  /*
 * POST @ /support
 * body: { email, comment }
 */

export const sendComment = createAsyncThunk(
  "user/support",
  async (data, thunkAPI) => {
    try {
      await axios.post("/support", data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
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

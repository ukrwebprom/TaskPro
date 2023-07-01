import axios from "axios";
// import { refresh } from "redux/auth/operations";
import { refreshTokens, resetIsLoggedIn } from "redux/auth/slice";

axios.defaults.baseURL = "https://taskpro-41yf.onrender.com";
/* https://taskpro-41yf.onrender.com */
/* http://localhost:3001 */

// Utility to add JWT
export const setAuthHeader = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

// Utility to remove JWT
export const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = "";
};

export const setupAxiosInterceptors = (store) => {
  axios.interceptors.response.use(
    (response) => response,
    async (error) => {
      if (error.response.status === 401) {
        try {
          const { refreshToken } = store.getState().auth;
          const { data } = await axios.post("/user/refresh", {
            refreshToken,
          });
          setAuthHeader(data.token);
          store.dispatch(refreshTokens(data));
          error.config.headers.authorization = `Bearer ${data.token}`;
          return axios.request(error.config);
        } catch (error) {
          store.dispatch(resetIsLoggedIn());
          return Promise.reject(error);
        }
      }
      return Promise.reject(error);
    }
  );
};

// export const setupAxiosInterceptors = (store) => {
//   axios.interceptors.response.use(
//     (response) => response,
//     async (error) => {
//       if (error.response.status === 401) {
//         try {
//           const { refreshToken } = store.getState().auth;
//           store.dispatch(refresh(refreshToken));
//           const { token } = store.getState().auth;
//           setAuthHeader(token);
//           error.config.headers.authorization = `Bearer ${token}`;
//           return axios.request(error.config);
//         } catch (error) {
//           return Promise.reject(error);
//         }
//       }
//       return Promise.reject(error);
//     }
//   );
// };

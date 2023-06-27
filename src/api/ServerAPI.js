import axios from "axios";

axios.defaults.baseURL = "https://taskpro-41yf.onrender.com";

const setAuthToken = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

/* const resetAuthToken = () => {
    axios.defaults.headers.common.Authorization = '';
} */

axios.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response.status == 401) {
      try {
        const refreshToken = localStorage.getItem("refreshToken");

        const { data } = await axios.post("/user/refresh", { refreshToken });
        setAuthToken(data.token);
        localStorage.setItem("authToken", `"${data.token}"`);
        localStorage.setItem("refreshToken", data.refreshToken);
        error.config.headers.authorization = `Bearer ${data.token}`;
        return axios.request(error.config);
      } catch (error) {
        return Promise.reject(error);
      }
    }
    return Promise.reject(error);
  }
);

export const getMe = async (token) => {
  setAuthToken(token);
  const res = await axios.get("/user/me");
  return res.data;
};

export const updTheme = async (theme) => {
  const res = await axios.patch("/user/theme", { theme });
  return res.data;
};

export const login = async (data) => {
  const res = await axios.post("/user/login", data);
  if (res.data.token) setAuthToken(res.data.token);
  localStorage.setItem("refreshToken", res.data.refreshToken);
  return res.data;
};

export const logout = async () => {
  const res = await axios.post("/user/logout");
  localStorage.setItem("refreshToken", "");
  return res.data;
};

export const register = async (data) => {
  const res = await axios.post("/user/register", data);
  return res.data;
};

export const getBoards = async () => {
  const res = await axios.get("/boards");
  return res.data;
};

export const deleteBoard = async (id) => {
  const res = await axios.delete("/boards/" + id);
  return res.data;
};

export const getBoard = async (id) => {
  const res = await axios.get("/boards/" + id);
  return res.data;
};

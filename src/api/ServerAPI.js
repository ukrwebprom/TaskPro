import axios from "axios";

axios.defaults.baseURL = "https://taskpro-41yf.onrender.com";

const setAuthToken = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

/* const resetAuthToken = () => {
    axios.defaults.headers.common.Authorization = '';
} */

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
  return res.data;
};

export const logout = async () => {
  const res = await axios.post("/user/logout");
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

export const updateBackground = async (boardId, data) => {
  const res = await axios.put(`/boards/${boardId}`, data);
  return res.data;
};

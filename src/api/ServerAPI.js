import axios from 'axios';

axios.defaults.baseURL = 'https://taskpro-41yf.onrender.com';

const setAuthToken = token => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
}

const resetAuthToken = () => {
    axios.defaults.headers.common.Authorization = '';
}

export const getMe = async (token) => {
    setAuthToken(token);
    const res = await axios.get('/users/me');
    return res.data;
}

export const updTheme = async (theme) => {
    const res = await axios.patch('/users/theme', {theme});
    return res.data;
}

export const login = async (data) => {
    const res = await axios.post('/users/login', data);
    return res.data;
}
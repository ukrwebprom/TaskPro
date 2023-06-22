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
    try {
        const res = await axios.get(`/user/me`);
        setAuthToken(res.data.token);
        return res.data;

    } catch(err) {
        return false;
    }
}
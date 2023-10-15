import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://api.github.com',
});


instance.interceptors.request.use(
    (config) => {
        console.log('axios request interceptor');
        return config;
    },
    (error) => {
        console.log('axios request interceptor error');
        return Promise.reject(error);
    },
);


instance.interceptors.response.use(
    (response) => {
        console.log('axios response interceptor');
        return response;
    },
    (error) => {
        console.log('axios response interceptor error');
        return Promise.reject(error);
    },
);

export default instance;

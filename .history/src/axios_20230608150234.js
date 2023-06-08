import axios from 'axios';
import _ from 'lodash';
// import config from './config';

const instance = axios.create({
    baseURL: process.env.REACT_APP_BACKEND_URL,
    // withCredentials: true,
});




instance.interceptors.response.use(
    (response) => {
        // Thrown error for request with OK status code
        const { data } = response;
        
        return response.data;
    },
    (error) => {
        const { response } = error;
        if (response == null) {
            return Promise.reject(error);
        }

        const { data } = response;

        if (data.hasOwnProperty('s') && data.hasOwnProperty('errmsg')) {
            return Promise.reject(
                createError(response.status, data['s'], data['errmsg'])
            );
        }

        if (data.hasOwnProperty('code') && data.hasOwnProperty('message')) {
            return Promise.reject(
                createError(
                    response.status,
                    data['code'],
                    data['message'],
                    data['problems']
                )
            );
        }

        
    }
);

export default instance;

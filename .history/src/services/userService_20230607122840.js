import axios from '../axios';

const handleLoginApi = (userEmail, password) => {
    return axios.post('/api/login',{email: userEmail ,password: userPassword});
};

export { handleLoginApi };

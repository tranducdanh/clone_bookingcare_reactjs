import axios from '../axios';

const handleLoginApi = (email, password) => {
    return axios.post('/api/login',{email: userEmail ,password: user});
};

export { handleLoginApi };
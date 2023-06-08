import axios from '../axios';

const handleLoginApi = (email, password) => {
    return axios.post('/api/login',{email: user,password});
};

export { handleLoginApi };

import axios from '../axios';

const handleLoginApi = (userEmail, userPassword) => {
    return axios.post('/api/login', {
        email: userEmail,
        password: userPassword,
    });
};

const getAllUsers =

export { handleLoginApi };
 
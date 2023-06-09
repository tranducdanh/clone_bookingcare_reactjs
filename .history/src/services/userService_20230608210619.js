import axios from '../axios';

const handleLoginApi = (userEmail, userPassword) => {
    return axios.post('/api/login', {
        email: userEmail,
        password: userPassword,
    });
};

const getAllUsers =(id)=>{
    return axios.get('/api/get-all-users',{id:id});
}

export { handleLoginApi };
 
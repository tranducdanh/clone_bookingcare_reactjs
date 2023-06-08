import axios from '../axios'

export const handleLogin = (email) =>{
    return axios.post('/api/login');
}
import axios from '../axios'

export const handleLogin = (email, pass) =>{
    return axios.post('/api/login');
}
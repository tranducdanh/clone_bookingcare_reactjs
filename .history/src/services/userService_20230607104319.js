import axios from '../axios'

export de const handleLogin = (email, password) =>{
    return axios.post('/api/login');
}
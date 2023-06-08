import axios from '../axios'

export default const handleLogin = (email, password) =>{
    return axios.post('/api/login');
}
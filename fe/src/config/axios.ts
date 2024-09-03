import axios  from 'axios';

export const configAxios = () => {
    axios.defaults.baseURL = "http://localhost:4000";
    const token = localStorage.getItem('token');

    axios.interceptors.request.use((config) =>{
        if(token){
            config.headers.Authorization = ` Bearer ${token}`;
        }
        return config;
    })
};
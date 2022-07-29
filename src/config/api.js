import axios from 'axios';

const eventAPI = axios.create({
    baseURL: 'http://localhost:3000'
})

export default eventAPI;
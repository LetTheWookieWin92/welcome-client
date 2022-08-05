import axios from 'axios';

const eventAPI = axios.create({
    baseURL: 'https://sls-welcome-api.herokuapp.com/'
})

export default eventAPI;
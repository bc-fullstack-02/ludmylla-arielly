import axios from 'axios';

export default axios.create({
    baseURL: 'http://172.17.1.170:3000/v1',
});
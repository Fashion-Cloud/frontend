import axios from 'axios';

const apiV1Instance = axios.create({
    baseURL: '/api/v1',
    headers: {
        'Content-Type': 'application/json',
    },
});

export default apiV1Instance;
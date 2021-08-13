import apisauce from 'apisauce';
import {
    CONES_ENDPOINT,
} from './constants';

const baseURL = 'http://localhost:3000';
const api = apisauce.create({
    baseURL,
    headers: {
        'Content-Type': 'application/json',
    },
    timeout: 0
});

const createBackendServer = () => {
    const fetchCones = () => api.get(CONES_ENDPOINT);

    return {
        fetchCones
    };
};

export default createBackendServer;
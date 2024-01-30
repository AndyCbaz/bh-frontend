import axios from 'axios';
import { BASE_URL } from '../config/config';

export const backendApi = axios.create({
    baseURL: BASE_URL,
})
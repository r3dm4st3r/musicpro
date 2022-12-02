import axios from 'axios';
import { baseURL } from '../helpers';

const ax = axios.create({
	baseURL: baseURL.API_URL,
	headers: { 'Content-Type': 'application/json' },
	responseType: 'json',
	charset: 'utf-8',
	withCredentials: true,
});

export default ax;

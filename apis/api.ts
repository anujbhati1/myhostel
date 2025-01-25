import axios from 'axios';
import {baseUrl} from './endPoints';

const Http = axios.create({
  baseURL: baseUrl,
  timeout: 100000,
});

export default Http;

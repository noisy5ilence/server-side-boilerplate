import axios from 'axios';

const client = axios.create({
  baseURL: '/api'
});

client.interceptors.response.use(({ data }) => data);

export default client;

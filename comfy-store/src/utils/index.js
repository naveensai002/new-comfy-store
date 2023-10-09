import axios from 'axios';
import { useEffect } from 'react';

const BASE_URL = 'https://strapi-store-server.onrender.com/api';

export const customFetch = axios.create({
  baseURL: BASE_URL,
});

import axios from 'axios';
import { useEffect } from 'react';

const BASE_URL = 'https://course-api.com/react-store-products';

export const customFetch = axios.create({
  baseURL: BASE_URL,
});
export const fetchSingleProduct = async (id) => {
  const res = await axios(
    `https://course-api.com/react-store-single-product?id=${id}`
  );
  return res;
};

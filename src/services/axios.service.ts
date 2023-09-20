import axios from 'axios';

import { getLocalConfig } from './config.service';

const { API_EP } = getLocalConfig();

const apiClient = axios.create({
  baseURL: API_EP,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
});

export { apiClient };

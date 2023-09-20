import { fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

import { getLocalConfig } from './config.service';

const { API_EP } = getLocalConfig();

export const baseQuery = fetchBaseQuery({
  baseUrl: API_EP,
});

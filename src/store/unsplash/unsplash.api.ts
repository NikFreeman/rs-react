import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
export const unsplashApi = createApi({
  reducerPath: 'unsplash/api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.unsplash.com',
  }),
  endpoints: (build) => ({}),
});

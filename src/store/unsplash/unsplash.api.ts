import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Photo, SearchPhotos } from '../../models/unsplash';
// const CLIENT_ID = import.meta.env.VITE_CLIENT_ID;
const CLIENT_ID = 'SouHY7Uul-OxoMl3LL3c0NkxUtjIrKwf3tsGk1JaiVo';
const PER_PAGE = 12;
const ORIENTATION = 'landscape';
const BASE_URL = 'https://api.unsplash.com';
export const unsplashApi = createApi({
  reducerPath: 'unsplash/api',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  endpoints: (build) => ({
    searchPhotos: build.query<Photo[], string>({
      query: (search: string) => ({
        url: 'search/photos',
        params: {
          client_id: CLIENT_ID,
          orientation: ORIENTATION,
          per_page: PER_PAGE,
          query: search,
        },
      }),
      transformResponse: (response: SearchPhotos) => response.results,
    }),
  }),
});
export const { useSearchPhotosQuery } = unsplashApi;

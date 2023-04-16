import { configureStore } from '@reduxjs/toolkit';
import { unsplashApi } from './unsplash/unsplash.api';
import { searchValueSlice } from './search-value';
import { dataFormSlice } from './form-data';
import { useSelector as rawUseSelector, TypedUseSelectorHook } from 'react-redux';

export const store = configureStore({
  reducer: {
    [unsplashApi.reducerPath]: unsplashApi.reducer,
    searchValue: searchValueSlice.reducer,
    dataForm: dataFormSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(unsplashApi.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export const useSelector: TypedUseSelectorHook<RootState> = rawUseSelector;

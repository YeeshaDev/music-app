import { configureStore } from '@reduxjs/toolkit';

import playerReducer from './features/playerSlice';
import { shazamCoreApi } from './services/ShazamCore';

export const store = configureStore({
  //This is like  a boiler point code for most react redux application
  reducer: {
    [shazamCoreApi.reducerPath]: shazamCoreApi.reducer,
    player: playerReducer,
  },
  middleware:(getDefaultMiddleware) => getDefaultMiddleware().concat(shazamCoreApi.middleware),
});

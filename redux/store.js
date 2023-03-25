import {configureStore} from '@reduxjs/toolkit';
import {fetchPhotosReducer} from './fetchPhotos';

export const store = configureStore({
  reducer: {
    fetchPhotos: fetchPhotosReducer,
  },
});

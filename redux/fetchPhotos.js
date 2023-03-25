import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

const initialState = {
  photosArr: [],
};

export const getPhotos = createAsyncThunk('/photos', async () => {
  const res = await fetch(
    'https://api.unsplash.com/photos?client_id=jpSYJJBfDq9mgVa4QXtaBXcFsAhcalwyX30DTQhGGrU',
  );
  let data = await res.json();
  return data;
});

export const searchPhotos = createAsyncThunk('/search/photos', async val => {
  console.log(val);
  const res = await fetch(
    `https://api.unsplash.com/search/photos?client_id=jpSYJJBfDq9mgVa4QXtaBXcFsAhcalwyX30DTQhGGrU&query=${val}`,
  );
  let data = await res.json();
  return data.results;
});

const fetchPhotosSlice = createSlice({
  name: 'photo',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getPhotos.fulfilled, (state, action) => {
      console.log(action.payload, 'fulfiled');
      state.photosArr = action.payload;
    });
    builder.addCase(searchPhotos.fulfilled, (state, action) => {
      console.log(action.payload, 'fulfiled search');
      state.photosArr = action.payload;
    });
  },
});

export const fetchPhotosReducer = fetchPhotosSlice.reducer;

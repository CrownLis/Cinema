import { ITopFilmList } from '../../types/types';
import { getTopFilms } from './asyncAction';
import { createSlice } from '@reduxjs/toolkit';

export interface ITopFilmsState {
  list: ITopFilmList | null
  loading: boolean
  error:string
}

const initialState: ITopFilmsState = {
  list: null,
  loading: false,
  error:''
};


const filteredListSlice = createSlice({
  name: 'filteredListSlice',
  initialState,
  reducers: {

  },

  extraReducers: (builder) => {
    builder
      .addCase(getTopFilms.pending, (state) => {
        (state.loading = true)
      })
      .addCase(getTopFilms.fulfilled, (state, action) => {
        (state.loading = false), (state.list = action.payload)
      })
      .addCase(getTopFilms.rejected, (state) => {
        (state.loading = false), (state.error = 'error')
      })
  }
});

export default filteredListSlice.reducer
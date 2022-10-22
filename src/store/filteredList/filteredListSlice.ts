import { getFilteredList } from './asyncAction';
import { createSlice } from '@reduxjs/toolkit';

import { IFilmList } from '../../types/types'

export interface IFilteredListState {
  list: IFilmList | null
  loading: boolean
  error:string
}

const initialState: IFilteredListState = {
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
      .addCase(getFilteredList.pending, (state) => {
        (state.loading = true)
      })
      .addCase(getFilteredList.fulfilled, (state, action) => {
        (state.loading = false), (state.list = action.payload)
      })
      .addCase(getFilteredList.rejected, (state) => {
        (state.loading = false), (state.error = 'error')
      })
  }
});

export default filteredListSlice.reducer
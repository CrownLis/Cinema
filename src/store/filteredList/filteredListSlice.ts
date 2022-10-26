import { getFilteredList } from './asyncAction';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IFilmList } from '../../types/types'

export interface IFilteredListState {
  list: IFilmList | null
  currentPage: number
  loading: boolean
  error: string
  filterParameters: { countries?: number, genres?: number, ratingFrom?: number, ratingTo?: number, yearFrom?: number, yearTo?: number }
}

const initialState: IFilteredListState = {
  list: null,
  currentPage: 1,
  loading: false,
  error: '',
  filterParameters: { countries: 1, genres: 1, ratingFrom: 0, ratingTo: 10, yearFrom: 1000, yearTo: 3000 }
};


const filteredListSlice = createSlice({
  name: 'filteredListSlice',
  initialState,
  reducers: {
    setCurrentPage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload;
    },
    setFilterParameters(state, action: PayloadAction<
      { countries?: number, genres?: number, ratingFrom?: number, ratingTo?: number, yearFrom?: number, yearTo?: number }
    >) {
      state.filterParameters = action.payload;
    },
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


export const { setCurrentPage, setFilterParameters } = filteredListSlice.actions
export default filteredListSlice.reducer
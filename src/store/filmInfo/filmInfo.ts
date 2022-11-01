import { IFilmData } from './../../types/types';
import { getFilmInfo } from './asyncAction';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface IFilmInfoState {
  data:IFilmData | null
  loading: boolean
  error: string
}

const initialState: IFilmInfoState = {
  data: null,
  loading: false,
  error: '',
};


const filmInfoSlice = createSlice({
  name: 'filmInfoSlice',
  initialState,
  reducers: {
    setLoadingFilmInfo(state, action: PayloadAction<boolean>) {
      state.loading = action.payload
    }
  },

  extraReducers: (builder) => {
    builder
      .addCase(getFilmInfo.pending, (state) => {
        (state.loading = true)
      })
      .addCase(getFilmInfo.fulfilled, (state, action) => {
        (state.loading = false), (state.data = action.payload)
      })
      .addCase(getFilmInfo.rejected, (state) => {
        (state.loading = false), (state.error = 'error')
      })
  }
});

export const { setLoadingFilmInfo } = filmInfoSlice.actions
export default filmInfoSlice.reducer
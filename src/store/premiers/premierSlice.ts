import { getPremiers } from './asyncAction';
import { createSlice } from '@reduxjs/toolkit';

import { IPremierList } from './../../types/types'

export interface IPremierState {
  list: IPremierList | null
  loading: boolean
  error:string
}

const initialState: IPremierState = {
  list: null,
  loading: false,
  error:''
};


const premierSlice = createSlice({
  name: 'premierSlice',
  initialState,
  reducers: {

  },

  extraReducers: (builder) => {
    builder
      .addCase(getPremiers.pending, (state) => {
        (state.loading = true)
      })
      .addCase(getPremiers.fulfilled, (state, action) => {
        (state.loading = false), (state.list = action.payload)
      })
      .addCase(getPremiers.rejected, (state) => {
        (state.loading = false), (state.error = 'error')
      })
  }
});

export default premierSlice.reducer
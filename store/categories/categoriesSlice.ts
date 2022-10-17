import { getCategories } from './asyncAction';
import { createSlice } from '@reduxjs/toolkit';

import { ICategoriesList } from '../../types/types'

export interface ICategoriesState {
  list: ICategoriesList | null
  loading: boolean
  error:string
}

const initialState: ICategoriesState = {
  list: null,
  loading: false,
  error:''
};


const categoeisSlice = createSlice({
  name: 'categoeisSlice',
  initialState,
  reducers: {

  },

  extraReducers: (builder) => {
    builder
      .addCase(getCategories.pending, (state) => {
        (state.loading = true)
      })
      .addCase(getCategories.fulfilled, (state, action) => {
        (state.loading = false), (state.list = action.payload)
      })
      .addCase(getCategories.rejected, (state) => {
        (state.loading = false), (state.error = 'error')
      })
  }
});

export default categoeisSlice.reducer
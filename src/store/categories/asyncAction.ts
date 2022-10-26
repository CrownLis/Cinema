import { fetchCategories } from '../../api/cinemaApi';
import { ICategoriesList } from './../../types/types';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getCategories = createAsyncThunk<
  ICategoriesList,
  void,
  { rejectValue: string }
>('categories/getCategories', async () => {
  const response = await fetchCategories();
  const data = response.data
  return data
});
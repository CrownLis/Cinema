import { fetchTopFilms } from '../../api/cinemaApi';
import { ITopFilmList } from '../../types/types';
import { createAsyncThunk } from '@reduxjs/toolkit';

interface Attributes {
  type: any,
  page?: number
}

export const getTopFilms = createAsyncThunk<
  ITopFilmList,
  Attributes,
  { rejectValue: string }
>('topFilms/getTopFilms', async ({type,page}) => {
  const response = await fetchTopFilms(type,page);
  const data = response.data
  return data
});
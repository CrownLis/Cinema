import { fetchPremiers } from './../../src/API/Cinema';
import { IPremierList } from './../../types/types';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getPremiers = createAsyncThunk<
IPremierList,
  [number, string],
  { rejectValue: string }
>('premiers/getPremiers', async ([year, month] ) => {
  const response = await fetchPremiers(year, month);
  const data = response.data
  return data
});
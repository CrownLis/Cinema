import { fetchFilteredList } from '../../api/Cinema';
import { IFilmList } from './../../types/types';
import { createAsyncThunk } from '@reduxjs/toolkit';

interface Attributes {
  countries?:number | number[],
  genres?:number | number[],
  order?:string,
  type?:string,
  ratingFrom?:number,
  ratingTo?:number,
  yearFrom?:number,
  yearTo?:number,
  imdbId?:string,
  keyword?:string,
  page?:number
}

export const getFilteredList = createAsyncThunk<
IFilmList,
Attributes,
  { rejectValue: string }
>('filteredList/getFilteredList', async ({countries,genres,order,type,ratingFrom,ratingTo,yearFrom,yearTo,imdbId,keyword,page}) => {
  const response = await fetchFilteredList(countries,genres,order,type,ratingFrom,ratingTo,yearFrom,yearTo,imdbId,keyword,page);
  const data = response.data
  return data
});
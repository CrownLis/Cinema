import { fetchFilteredList } from '../../api/cinemaApi';
import { IFilmList } from './../../types/types';
import { createAsyncThunk } from '@reduxjs/toolkit';

interface Attributes {
  countries?:number,
  genres?:number,
  order?:string,
  type?:string,
  ratingFrom?:any,
  ratingTo?:any,
  yearFrom?:any,
  yearTo?:any,
  keyword?:string,
  page?:number
}

export const getFilteredList = createAsyncThunk<
IFilmList,
Attributes,
  { rejectValue: string }
>('filteredList/getFilteredList', async ({countries,genres,order,type,ratingFrom,ratingTo,yearFrom,yearTo,page}) => {
  const response = await fetchFilteredList(countries,genres,order,type,ratingFrom,ratingTo,yearFrom,yearTo,page);
  const data = response.data
  return data
});
import { fetchFilmInfoSeasons, fetchFilmInfoTrailers } from './../../api/cinemaApi';
import { fetchFilmInfo } from '../../api/cinemaApi';
import { IFilmData } from './../../types/types';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getFilmInfo = createAsyncThunk<
  IFilmData,
  number,
  { rejectValue: string }
>('filmInfo/getFilmInfo', async (id) => {
  const [dataInfo, dataSeason, dataTrailer] = await Promise.all([
    fetchFilmInfo(id), fetchFilmInfoSeasons(id), fetchFilmInfoTrailers(id)
  ]
  )
  const data = { info: dataInfo.data, seasons: dataSeason.data, trailers: dataTrailer.data }
  return data
});
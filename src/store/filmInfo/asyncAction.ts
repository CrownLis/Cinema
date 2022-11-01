import { fetchFilmInfoSeasons, fetchFilmInfoTrailers } from './../../api/cinemaApi';
import { fetchFilmInfo } from '../../api/cinemaApi';
import { IFilmData, ISeasons, IVideos } from './../../types/types';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getFilmInfo = createAsyncThunk<
IFilmData,
number,
  { rejectValue: string }
>('filmInfo/getFilmInfo', async (id) => {
  const responseInfo = await fetchFilmInfo(id);
  const dataInfo = responseInfo.data
  const responseSeasons = await fetchFilmInfoSeasons(id);
  const dataSeasons = responseSeasons.data
  const responseTrailers = await fetchFilmInfoTrailers(id);
  const dataTrailers = responseTrailers.data
  const data = {info:dataInfo,seasons:dataSeasons,trailers:dataTrailers}
  return data
});
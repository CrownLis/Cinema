import { RootState } from './../store';

export const getFilmInfoData = (state: RootState) => {
  return state.rootReducer.filmInfo.data
};

export const getFilteredFilms = (state: RootState) => {
  return state.rootReducer.filmInfo.data?.trailers.items.filter((item,index) => item.site === 'YOUTUBE' && index < 4 )
};

export const getFilmInfoLoading = (state: RootState) => {
  return state.rootReducer.filmInfo.loading
}
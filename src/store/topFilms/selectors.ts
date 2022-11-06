import { RootState } from './../store';

export const getTopFilmsData = (state: RootState) => {
  return state.topFilms.list
};

export const getTopFilmsLoading = (state: RootState) => {
  return state.topFilms.loading
};
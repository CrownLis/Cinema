import { RootState } from './../store';

export const getPremiersData = (state: RootState) => {
  return state.premiers.list
};

export const getPremierLoading = (state: RootState) => {
  return state.premiers.loading
};
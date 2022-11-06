import { RootState } from './../store';

export const getCategoriesData = (state: RootState) => {
  return state.category.list
};

export const getCategoriesLoading = (state: RootState) => {
  return state.category.loading
};
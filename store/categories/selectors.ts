import { RootState } from './../store';

export const getCategoriesData = (state: RootState) => {
  return state.rootReducer.category.list
};

export const getCategoriesLoading = (state: RootState) => {
  return state.rootReducer.category.loading
};
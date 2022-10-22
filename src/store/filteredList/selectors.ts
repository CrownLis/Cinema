import { RootState } from './../store';

export const getFilteredListData = (state: RootState) => {
  return state.rootReducer.filteredList.list
};

export const getFilteredListLoading = (state: RootState) => {
  return state.rootReducer.filteredList.loading
};
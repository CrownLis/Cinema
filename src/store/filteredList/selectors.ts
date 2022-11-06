import { RootState } from './../store';

export const getFilteredListData = (state: RootState) => {
  return state.filteredList.list
};

export const getFilteredListLoading = (state: RootState) => {
  return state.filteredList.loading
};

export const getFilteredListPage = (state:RootState) => {
  return state.filteredList.currentPage
}

export const getFilterParameters = (state:RootState) => {
  return state.filteredList.filterParameters
}
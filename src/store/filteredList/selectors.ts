import { RootState } from './../store';

export const getFilteredListData = (state: RootState) => {
  return state.rootReducer.filteredList.list
};

export const getFilteredListLoading = (state: RootState) => {
  return state.rootReducer.filteredList.loading
};

export const getFilteredListPage = (state:RootState) => {
  return state.rootReducer.filteredList.currentPage
}

export const getFilterParameters = (state:RootState) => {
  return state.rootReducer.filteredList.filterParameters
}
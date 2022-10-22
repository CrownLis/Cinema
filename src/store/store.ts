import { combineReducers, configureStore } from "@reduxjs/toolkit";
import premierSlice from './premiers/premierSlice'
import categoriesSlice from './categories/categoriesSlice'
import filteredListSlice from './filteredList/filteredListSlice'


const rootReducer = combineReducers({
premiers:premierSlice,
category:categoriesSlice,
filteredList:filteredListSlice
})

const store = configureStore({
    reducer: {
      rootReducer
    }
  });

  
  export type RootState = ReturnType<typeof store.getState>;
  export type AppDispatch = typeof store.dispatch;

export default store
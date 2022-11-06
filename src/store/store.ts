import { combineReducers, configureStore } from "@reduxjs/toolkit";
import premierSlice from './premiers/premierSlice'
import categoriesSlice from './categories/categoriesSlice'
import filteredListSlice from './filteredList/filteredListSlice'
import topFilmsSlice from "./topFilms/topFilmsSlice";
import filmInfoSlice from './filmInfo/filmInfo'


const rootReducer = combineReducers({
premiers:premierSlice,
category:categoriesSlice,
filteredList:filteredListSlice,
topFilms:topFilmsSlice,
filmInfo:filmInfoSlice
})

const store = configureStore({
    reducer:
      rootReducer
  });

  
  export type RootState = ReturnType<typeof store.getState>;
  export type AppDispatch = typeof store.dispatch;

export default store
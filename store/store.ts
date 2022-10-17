import { combineReducers, configureStore } from "@reduxjs/toolkit";
import premierSlice from './premiers/premierSlice'
import categoriesSlice from './categories/categoriesSlice'


const rootReducer = combineReducers({
premiers:premierSlice,
category:categoriesSlice
})

const store = configureStore({
    reducer: {
      rootReducer
    }
  });

  
  export type RootState = ReturnType<typeof store.getState>;
  export type AppDispatch = typeof store.dispatch;

export default store
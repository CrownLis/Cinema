import React, { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layouts from './layouts/Layouts';
import HomePage from './components/HomePage';
import Category from './components/CategoryPage';
import FilmInfo from './components/FilmInfoPage';



export const App: FC = () => {

  return (
    <Routes>
      <Route path="/" element={<Layouts />}>
        <Route index
          element={<HomePage />}
        />

        <Route
          path='category'
          element={<Category />}
        />
        <Route
        path='/film/:id'
        element={<FilmInfo/>}
        />
      </Route>
    </Routes>
  )
}

export default App
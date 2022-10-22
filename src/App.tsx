import React, { FC, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useAppDispatch } from './store/hooks';
import { getPremiers } from './store/premiers/asyncAction';
import { getCategories } from './store/categories/asyncAction';
import Layouts from './layouts/Layouts';
import HomePage from './components/HomePage';
import Category from './components/CategoryPage';



export const App: FC = () => {

  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getPremiers([2022, 'APRIL']))
    dispatch(getCategories())
  })

  return (
    <Routes>
      <Route path="/" element={<Layouts/>}>
      <Route index
          element={<HomePage />}
        />
        
        <Route
          path='category'
          element={<Category />}
        />
        </Route>
    </Routes>
  )
}

export default App
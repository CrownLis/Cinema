import React, { FC, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import {useAppDispatch} from './../store/hooks'
import { getPremiers } from './../store/premiers/asyncAction';
import Body from './components/Body';
import { getCategories } from './../store/categories/asyncAction';
import Sidebar from './components/Sidebar';


export const App: FC = () => {

const dispatch = useAppDispatch()

useEffect(() => {
  dispatch(getPremiers([2022,'APRIL']))
  dispatch(getCategories())
})

return (
  <div>
      <Header />
      <Body/>
      <Sidebar/>
      <Routes>
        <Route path="/profile" element={''} />
      </Routes>
  </div>
)
}

export default App
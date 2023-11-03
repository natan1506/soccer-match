import React from 'react'
import { Route, Routes } from "react-router-dom";

import { CreateMatch } from './pages/createMatch'
import { ListMatch } from './pages/listMatch'
import { HomeRoot } from './pages';


export function Router() {
  return (
    <Routes>
      <React.Fragment>
        <Route path='/' element={<HomeRoot><CreateMatch /></HomeRoot>} />
        <Route path="/list-match" element={<HomeRoot><ListMatch /></HomeRoot>} />
      </React.Fragment>
    </Routes>
  )
}
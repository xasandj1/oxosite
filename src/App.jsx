import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { MainLayout } from './layout/MainLayout/MainLayout'
import { nanoid } from 'nanoid'
import { BrandsPages } from './page/BrandPages'
import NavHook from './hook/Nav-hook'
import { NotFound } from './page/NotFound'
import main_pages from './router/Router'

const App = () => {
  NavHook()
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        {main_pages.map((route) => (
          <Route
            index={route.path ? false : true}
            key={nanoid()}
            path={route.path}
            element={route.component}
          />
        ))}
        <Route path='/barchasi/:name' element={<BrandsPages />} />
      </Route>
      <Route path='*' element={<NotFound />} />
    </Routes>
  )
}

export default App
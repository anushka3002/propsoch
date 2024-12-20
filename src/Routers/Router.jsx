import React from 'react'
import { Route, Routes } from 'react-router'
import Properties from '../components/properites'

export const Router = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Properties/>}></Route>
        </Routes>
    </div>
  )
}

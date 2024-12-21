import React from 'react'
import { Route, Routes } from 'react-router'
import Properties from '../components/properites'
import PropertyDetails from '../components/PropertyDetails'

export const Router = () => {

  return (
    <div>
        <Routes>
            <Route path='/' element={<Properties/>}></Route>
            <Route path='/propertyDetails/:id' element={<PropertyDetails/>}></Route>
        </Routes>
    </div>
  )
}

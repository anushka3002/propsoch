import React from 'react'
import { Route, Routes } from 'react-router'
import Properties from '../components/properites'
import PropertyDetails from '../components/PropertyDetails'
import Wishlist from '../components/Wishlist'

export const Router = () => {

  return (
    <div>
        <Routes>
            <Route path='/' element={<Properties/>}></Route>
            <Route path='/propertyDetails/:id' element={<PropertyDetails/>}></Route>
            <Route path='/wishlist' element={<Wishlist/>}></Route>
        </Routes>
    </div>
  )
}

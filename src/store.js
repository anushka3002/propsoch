import { configureStore } from '@reduxjs/toolkit';
import { getProducts, getSingleProduct } from './Reducers/reducer';

const store = configureStore({
  reducer: {
    data : getProducts,
    details: getSingleProduct
  },
});

export default store;

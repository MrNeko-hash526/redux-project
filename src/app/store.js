import { configureStore } from '@reduxjs/toolkit'
import cartReducer from '../features/shopCart/cartSlice'
import productReducer from '../features/shopCart/productSlice'

const store = configureStore({
  reducer: {
    cart: cartReducer, // Reducer for cart functionality
    products: productReducer, // Reducer for product functionality
  },
})

export default store
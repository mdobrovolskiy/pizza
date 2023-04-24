import { configureStore } from '@reduxjs/toolkit'
import filter from './Slices/filterSlice'
import cart from './Slices/cartSlice'
import login from './Slices/loginSlice'

export const store = configureStore({
  reducer: {
    filter,
    cart,
    login,
  },
})

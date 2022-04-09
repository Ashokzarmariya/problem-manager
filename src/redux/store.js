import { configureStore } from '@reduxjs/toolkit'
import problemSlice from './problemSlice'

export const store = configureStore({
    reducer: {
        problems:problemSlice
    },
  })
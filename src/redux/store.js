import { configureStore } from '@reduxjs/toolkit'
import getAllProblemSlice from './getAllProblemSlice'
import problemSlice from './problemSlice'

export const store = configureStore({
    reducer: {
        problems: problemSlice,
        allproblems:getAllProblemSlice
    },
  })
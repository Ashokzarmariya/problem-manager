import { configureStore } from '@reduxjs/toolkit'
import getAllProblemSlice from './getAllProblemSlice'
import problemSlice from './problemSlice'
import singleProblemSlice from './singleProblemSlice'

export const store = configureStore({
    reducer: {
        problems: problemSlice,
        allproblems: getAllProblemSlice,
        singleProblem:singleProblemSlice,
    },
  })
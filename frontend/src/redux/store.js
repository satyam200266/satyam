import { configureStore } from '@reduxjs/toolkit'
import userSlice from './user'
import noticeSlice from './notice'

export const store = configureStore({
  reducer: {
    user : userSlice,
    notice: noticeSlice,
  },
})
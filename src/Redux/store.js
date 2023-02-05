import { configureStore } from '@reduxjs/toolkit'
import stampsReducer from './Features/Stamps/StampSlice'
import codeReducer from './Features/Appro/ApproCode'
import deviceReducer from './Features/Device/DeviceSlice'

export const store = configureStore({
  reducer: {
    stamps: stampsReducer,
    code: codeReducer,
    device: deviceReducer,
  },
})
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: null,
}

export const deviceSlice = createSlice({
  name: 'device',
  initialState,
  reducers: {
    changeDevice: (state, action) => {
      state.value = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { changeDevice } = deviceSlice.actions

export default deviceSlice.reducer
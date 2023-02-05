import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: null,
}

export const stampsSlice = createSlice({
  name: 'stamps',
  initialState,
  reducers: {
    changeStamps: (state, action) => {
      state.value = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { changeStamps } = stampsSlice.actions

export default stampsSlice.reducer
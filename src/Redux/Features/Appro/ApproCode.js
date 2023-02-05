import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: null,
}

export const codeSlice = createSlice({
  name: 'code',
  initialState,
  reducers: {
    changeCode: (state, action) => {
      state.value = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { changeCode } = codeSlice.actions

export default codeSlice.reducer
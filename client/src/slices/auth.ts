import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user: {
    name: '',
    password: '',
  }
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload
    },
  },
})

export const authActions = {
  setUser: authSlice.actions.setUser,
}

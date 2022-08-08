import { createSlice } from '@reduxjs/toolkit'
import { login } from 'features/thunks/auth'

const authSlice = createSlice({
  name: 'auth',
  initialState: { token: null, error: null, loading: false },
  reducers: {
    logout: (state) => {
      state.token = null
      state.error = null
      state.loading = false
    }
  },
  extraReducers: {
    [login.pending]: (state) => {
      state.loading = true
    },
    [login.fulfilled]: (state, { payload }) => {
      state.loading = false
      state.token = payload.token
      state.error = null
    },
    [login.rejected]: (state, { payload }) => {
      state.loading = false
      state.error = payload.message
      state.token = null
    }
  }
})

export const { logout } = authSlice.actions
export default authSlice.reducer

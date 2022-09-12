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
      state.token = null
      state.error = null
      state.loading = true
    },
    [login.fulfilled]: (state, { payload }) => {
      state.token = payload
      state.error = null
      state.loading = false
    },
    [login.rejected]: (state, { payload }) => {
      state.token = null
      state.error = payload
      state.loading = false
    }
  }
})

export const { logout } = authSlice.actions
export default authSlice.reducer

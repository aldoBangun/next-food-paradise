import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const getUser = createAsyncThunk('currentUser/getUser', async (id, { rejectWithValue }) => {
  try {
    const response = await axios.get(`/users/${id}`)
    const userData = response?.data?.data

    delete userData.password
    return userData
  } catch(err) {
    return rejectWithValue(err?.response?.data?.message || 'Something Went Wrong')
  } 
})

const currentUserSlice = createSlice({
  name: 'currentUser',
  initialState: {
    user: null,
    error: null,
    loading: false
  },
  reducers: {
    resetCurrentUser: (state) => {
      state.user = null
      state.error = null
      state.loading = false
    }
  },
  extraReducers: {
    [getUser.pending]: (state) => {
      state.user = null
      state.error = null
      state.loading = true
    },
    [getUser.fulfilled]: (state, { payload }) => {
      state.user = payload
      state.error = null
      state.loading = false
    },
    [getUser.rejected]: (state, { payload }) => {
      state.user = null
      state.error = payload
      state.loading = false
    }
  }
})

export const { resetCurrentUser } = currentUserSlice.actions
export default currentUserSlice.reducer
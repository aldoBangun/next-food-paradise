import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const login = createAsyncThunk('auth/login', async (user, { rejectWithValue }) => {
  try {
    const response = await axios.post('/auth/login', user, {
      category: 'noAuth'
    })
    return response.data
  } catch(err) {
    return rejectWithValue(err.response.data)
  }
})

export const register = createAsyncThunk('auth/register', async (user, { rejectWithValue }) => {
  try {
    const response = await axios.post('/auth/register', user, {
      category: 'noAuth'
    })
    return response
  } catch (err) {
    return rejectWithValue(err.response.data)
  }
})
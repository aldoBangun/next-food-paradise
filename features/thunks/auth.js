import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const login = createAsyncThunk('auth/login', async (user, { rejectWithValue }) => {
  try {
    const response = await axios.post('/auth/login', user)
    return response?.data?.token
  } catch(err) {
    return rejectWithValue(err?.response?.data?.message || 'Something went wrong')
  }
})

export const register = createAsyncThunk('auth/register', async (user, { rejectWithValue }) => {
  try {
    const response = await axios.post('/auth/register', user)
    return response
  } catch (err) {
    return rejectWithValue(err?.response?.data?.message || 'Something went wrong')
  }
})
import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const getPopularRecipe = createAsyncThunk(
  'popularRecipe/getPopularRecipe',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get('/recipes/latest')
      return response.data.data
    } catch(err) {
      return rejectWithValue(err)
    }
  }
)

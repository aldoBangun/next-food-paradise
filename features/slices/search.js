import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const search = createAsyncThunk('search/search', async (keyword, { rejectWithValue }) => {
  try {
    const getNewestRecipes = axios.get(`/recipes?title=${keyword}&sort=created_at&order=DESC`)
    const getRecipes = axios.get(`/recipes?title=${keyword}&sort=title&order=ASC`)
    const response = await Promise.all([getNewestRecipes, getRecipes])
    const [newestRecipesResponse, recipesResponse] = response
    const newestRecipes = newestRecipesResponse?.data?.data
    const recipes = recipesResponse?.data?.data
    const payload = { newestRecipes, recipes }

    return payload
  } catch (err) {
    return rejectWithValue(err?.response?.data?.message || 'Something Went Wrong')
  }
})

const searchSlice = createSlice({
  name: 'search',
  initialState: {
    newestRecipes: [],
    recipes: [],
    error: null,
    loading: false
  },
  extraReducers: {
    [search.pending]: (state) => {
      state.newestRecipes = []
      state.recipes = []
      state.error = null
      state.loading = true
    },
    [search.fulfilled]: (state, { payload }) => {
      state.newestRecipes = payload.newestRecipes
      state.recipes = payload.recipes
      state.error = null
      state.loading = false
    },
    [search.rejected]: (state, { payload }) => {
      state.newestRecipes = []
      state.recipes = []
      state.error = payload
      state.loading = false  
    } 
  }
})

export default searchSlice.reducer
import { createSlice, createEntityAdapter, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const getAllRecipes = createAsyncThunk('recipes/getAllRecipes', async (config, { rejectWithValue }) => {
  try {
    const response = await axios.get(`/recipes?page=${config.page}&limit=${config.limit}`)
    const { totalData, length, data, page, totalPages } = response?.data
    const payload = {
      recipes: data,
      totalRecipes: totalData,
      dataLength: length,
      currentPage: page,
      totalPages
    }

    return payload
  } catch (err) {
    return rejectWithValue(err?.response?.data?.message || 'Something Went Wrong')
  }
})

const recipesAdapter = createEntityAdapter({
  selectId: (recipe) => recipe.recipe_id
})

const initialState = {
  loading: false,
  error: null,
  totalRecipes: 0,
  dataLength: 0,
  currentPage: 0,
  totalPages: 0
}

const recipesSlice = createSlice({
  name: 'recipes',
  initialState: recipesAdapter.getInitialState(initialState),
  extraReducers: {
    [getAllRecipes.pending]: (state) => {
      state.loading = true
      state.error = null
    },
    [getAllRecipes.fulfilled]: (state, { payload }) => {
      recipesAdapter.addMany(state, payload.recipes)
      state.totalRecipes = payload.totalRecipes
      state.dataLength = payload.dataLength
      state.totalPages = payload.totalPages
      state.currentPage = payload.currentPage
      state.loading = false
      state.error = null      
    },
    [getAllRecipes.rejected]: (state, { payload }) => {
      state.loading = false
      state.error = payload
    }
  }
})

export const recipesSelector = recipesAdapter.getSelectors(state => state.recipes)
export default recipesSlice.reducer
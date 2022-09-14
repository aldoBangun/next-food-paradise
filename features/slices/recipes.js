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

export const createRecipe = createAsyncThunk('recipes/creteRecipe', async (recipe, { rejectWithValue }) => {
  try {
    await axios.post(`/recipes`, recipe, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
  } catch (err) {
    return rejectWithValue(err?.response?.data?.message || 'Something went wrong')
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
  totalPages: 0,
  created: false
}

const recipesSlice = createSlice({
  name: 'recipes',
  initialState: recipesAdapter.getInitialState(initialState),
  reducers: {
    resetCreated: (state) => {
      state.created = false
    }
  },
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
    },
    [createRecipe.pending]: (state) => {
      state.loading = true
      state.error = null
      state.created = false
    },
    [createRecipe.fulfilled]: (state) => {
      state.loading = false
      state.error = null
      state.created = true
    },
    [createRecipe.rejected]: (state, { payload }) => {
      state.loading = false
      state.error = payload
      state.created = false
    }
  }
})

export const recipesSelector = recipesAdapter.getSelectors(state => state.recipes)
export const { resetCreated } = recipesSlice.actions
export default recipesSlice.reducer
import { createSlice } from '@reduxjs/toolkit'
import { getPopularRecipe } from '../thunks/popularRecipe'

const popularRecipe = createSlice({
  name: 'popularRecipe',
  initialState: {
    recipes: [],
    loading: false,
    error: null
  },
  extraReducers: {
    [getPopularRecipe.pending]: (state) => {
      state.loading = true
    },
    [getPopularRecipe.fulfilled]: (state, { payload }) => {
      state.recipes = payload
      state.loading = false
      state.error = null
    },
    [getPopularRecipe.rejected]: (state, { payload }) => {
      state.recipes = null
      state.loading = false
      state.error = payload
    }
  }
})

export default popularRecipe.reducer
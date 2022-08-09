import { createSlice } from '@reduxjs/toolkit'
import { getRecipeDetail } from 'features/thunks/recipeDetail'

const recipeSlice = createSlice({
  name: 'recipeDetail',
  initialState: {
    recipe: null,
    loading: false,
    error: null
  },
  extraReducers: {
    [getRecipeDetail.pending]: (state) => {
      state.loading = true
      state.recipe = null
      state.error = null
    },
    [getRecipeDetail.fulfilled]: (state, { payload }) => {
      state.loading = false
      state.recipe = payload
      state.error = null
    },
    [getRecipeDetail.rejected]: (state, { payload }) => {
      state.loading = false
      state.recipe = null
      state.error = payload
    }
  }
})

export default recipeSlice.reducer
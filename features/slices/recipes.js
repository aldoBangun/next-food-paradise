import { createSlice, createEntityAdapter } from '@reduxjs/toolkit'

const recipesAdapter = createEntityAdapter({
  selectId: (state) => state.recipeId
})

const recipesSlice = createSlice({
  name: 'recipes',
  initialState: recipesAdapter.getInitialState(),
  extraReducers: {

  }
})

export const recipesSelector = recipesAdapter.getSelectors(state => state.recipes)
export default recipesSlice.reducer
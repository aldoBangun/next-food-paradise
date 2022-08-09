import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const getRecipeDetail = createAsyncThunk(
  'recipeDetail/getRecipeDetail',
  async (recipeId, { rejectWithValue }) => {
    try {
      const responseRecipe = await axios.get(`/recipes/${recipeId}`)
      const recipe = responseRecipe?.data?.data
      const responseUser = await axios.get(`/users/${recipe.user_id}`)
      const user = responseUser?.data?.data

      return { ...recipe, ...user }
    } catch (err) {
      return rejectWithValue(err)
    }
  }
)

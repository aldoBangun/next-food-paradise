import { combineReducers } from 'redux'
import auth from 'features/slices/auth'
import recipes from 'features/slices/recipes'
import popularRecipe from 'features/slices/popularRecipe'
import recipeDetail from 'features/slices/recipeDetail'

const reducer = {
  auth,
  popularRecipe,
  recipeDetail,
  recipes,
}

export default combineReducers(reducer)
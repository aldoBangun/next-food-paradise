import { combineReducers } from 'redux'
import auth from 'features/slices/auth'
import recipes from 'features/slices/recipes'
import popularRecipe from 'features/slices/popularRecipe'
import recipeDetail from 'features/slices/recipeDetail'
import search from 'features/slices/search'
import currentUser from 'features/slices/currentUser'

const reducer = {
  auth,
  popularRecipe,
  recipeDetail,
  recipes,
  search,
  currentUser
}

export default combineReducers(reducer)
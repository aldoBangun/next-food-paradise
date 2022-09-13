import { useEffect, useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import { useDispatch, useSelector } from 'react-redux'
import { getAllRecipes, recipesSelector } from 'features/slices/recipes'
import RecipePopularItem from './RecipePopularItem'
import Loader from '../UI/Loader'


const RecipesAll = () => {
  const limit = 5
  const [page, setPage] = useState(1)
  const dispatch = useDispatch()
  const recipes = useSelector(recipesSelector.selectAll)
  const recipesState = useSelector(state => state.recipes)
  const { currentPage, totalPages, loading, error } = recipesState
  const hasMore = currentPage < totalPages

  const fetchRecipes = async () => {
    setPage(prev => prev + 1)
  }

  useEffect(() => {
    dispatch(getAllRecipes({ page, limit }))
  }, [page, dispatch])

  return (
    <>
      <h5 className="my-4">All Recipes</h5>
      {recipes?.length ? (
        <InfiniteScroll
          className="d-flex flex-column gap-3"
          dataLength={currentPage * limit}
          next={fetchRecipes}
          hasMore={hasMore}
          loader={<Loader />}
          endMessage={<p className="text-muted text-center">No more recipes.</p>}
        >
          {recipes?.length && recipes.map(recipe => (
            <RecipePopularItem key={recipe.recipe_id} { ...recipe } />
          ))}
        </InfiniteScroll>
      ) : (
        <p className="text-muted">Loading...</p>
      )}
    </>
  )
}

export default RecipesAll
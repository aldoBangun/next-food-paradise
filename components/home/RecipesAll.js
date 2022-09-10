import { useEffect, useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import { useDispatch, useSelector } from 'react-redux'
import { getAllRecipes, recipesSelector } from 'features/slices/recipes'
import RecipePopularItem from './RecipePopularItem'


const RecipesAll = () => {
  const loadLength = 2
  const [limit, setLimit] = useState(loadLength)
  const dispatch = useDispatch()
  const recipes = useSelector(recipesSelector.selectAll)
  const recipesState = useSelector(state => state.recipes)
  const { dataLength, totalRecipes, loading, error } = recipesState
  const hasMore = dataLength < totalRecipes

  const fetchRecipes = async () => {
    setLimit(prev => prev + loadLength)
  }

  useEffect(() => {
    dispatch(getAllRecipes(limit))
  }, [limit, dispatch])

  return (
    <>
      <h5 className="my-4">All Recipes</h5>
      {recipes?.length ? (
        <InfiniteScroll
          className="d-flex flex-column gap-3"
          dataLength={dataLength}
          next={fetchRecipes}
          hasMore={hasMore}
          loader={<p className="text-muted text-center">Loading...</p>}
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
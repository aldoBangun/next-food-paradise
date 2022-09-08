import RecipePopularItem from '@/components/home/RecipePopularItem'
import { useSelector } from 'react-redux'

const ResultList = () => {
  const searchState = useSelector(state => state.search)
  const { recipes, newestRecipes, loading, error } = searchState

  return (
    <>
      <div className="mb-4">
        <h6>Search Result</h6>
        {loading && <p className="text-muted">Loading...</p>}
        {recipes?.length ? (
          <ul className="d-flex flex-column gap-2">
            {recipes.map((item) => (
              <RecipePopularItem key={item.recipe_id} {...item} />
            ))}
          </ul>
        ) : (
          <p className="text-gray"> No results. </p>
        )}
      </div>

      <div>
        <h6>Newest Recipe</h6>
        {loading && <p className="text-muted">Loading...</p>}
        {newestRecipes?.length ? (
          <ul className="d-flex flex-column gap-2">
            {newestRecipes.map((item) => (
              <RecipePopularItem key={item.recipe_id} {...item} />
            ))}
          </ul>
        ) : (
          <p className="text-gray"> No results. </p>
        )}
      </div>
    </>
  )
}

export default ResultList

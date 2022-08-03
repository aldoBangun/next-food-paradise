import RecipeUserItem from './RecipeUserItem'

const RecipeUserList = ({ recipes, showActions }) => {
  return (
    <>
      <ul className="d-flex flex-column gap-3">
        {recipes.map(recipe => (
          <li key={recipe.recipeId}>
            <RecipeUserItem {...recipe} showActions={showActions} />
          </li>
        ))}
      </ul>
    </> 
  )
}

export default RecipeUserList

import RecipeUserItem from './RecipeUserItem'

const RecipeUserList = ({ recipes }) => {
  return (
    <>
      <ul className="d-flex flex-column gap-3">
        {recipes.map(recipe => (
          <li key={recipe.recipeId}>
            <RecipeUserItem {...recipe}/>
          </li>
        ))}
      </ul>
    </> 
  )
}

export default RecipeUserList

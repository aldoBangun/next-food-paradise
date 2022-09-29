import DetailHero from '@/components/recipe/detail/DetailHero'
import DetailTabs from '@/components/recipe/detail/DetailTabs'
import axios from 'axios'

const RecipeDetails = ({ recipe }) => {
  return (
    <>
      {recipe && (
        <>
          <DetailHero recipe={recipe} />
          <DetailTabs {...recipe} />
        </>
      )}
    </>
  )
}

export async function getStaticPaths() {
  const response = await axios.get(`/recipes`)
  const recipes = response?.data?.data

  return {
    paths: recipes.map(recipe => ({
      params: { recipeId: recipe?.recipe_id?.toString() }
    })),
    fallback: 'blocking',
  }
}

export async function getStaticProps(context) {
  const { recipeId } = context.params
  const responseRecipe = await axios.get(`/recipes/${recipeId}`)
  const recipe = responseRecipe?.data?.data
  const responseUser = await axios.get(`/users/${recipe.user_id}`)
  const user = responseUser?.data?.data

  return {
    props: {
      recipe: {
        ...recipe,
        ...user
      }
    },
    revalidate: 30
  }
}

export default RecipeDetails

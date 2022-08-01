import Layout from '@/components/layout/Layout'
import { Container } from 'react-bootstrap'
import RecipeUserList from '@/components/profile/RecipeUserList'

const LikedRecipe = () => {
  const recipes = [
    {
      recipeId: 1,
      photo: 'https://picsum.photos/id/9/200',
      title: 'Fire Pizza',
      restaurant: 'Veg Pizza',
      variant: 'Spicy'
    },
    {
      recipeId: 2,
      photo: 'https://picsum.photos/id/10/200',
      title: 'Sweet Taco',
      restaurant: 'Taco Mania',
      variant: 'Sweet'
    }
  ]

  return (
    <Container>
      <RecipeUserList recipes={recipes} />
    </Container>
  )
}

LikedRecipe.getLayout = function getLayout(page) {
  return <Layout header="Liked Recipe">{page}</Layout>
}

export default LikedRecipe

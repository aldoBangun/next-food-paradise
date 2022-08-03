import Layout from '@/components/layout/Layout'
import RecipeUserList from '@/components/profile/RecipeUserList'
import { Container } from 'react-bootstrap'

const Popular = () => {
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
      <RecipeUserList recipes={recipes} showActions={true} />
    </Container>
  )
}

Popular.getLayout = function getLayout(page) {
  return <Layout header="Popular Menu">{page}</Layout>
}

export default Popular

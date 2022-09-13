import Layout from '../../components/layout/Layout'
import FormAddRecipe from '@/components/recipe/FormAddRecipe'
import { Container } from 'react-bootstrap'
import withRouteGuard from 'hoc/withRouteGuard'

const RecipeAdd = () => {
  return (
    <>
      <Container>
        <h2 className="text-primary text-center py-3">Add Your Recipe</h2>
        <FormAddRecipe />
      </Container>
    </>
  )
}

const RecipeAddWithRouteGuard = withRouteGuard(RecipeAdd)

RecipeAddWithRouteGuard.getLayout = function getLayout(page) {
  return <Layout> {page} </Layout>
}

export default RecipeAddWithRouteGuard

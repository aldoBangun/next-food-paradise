import Layout from '../../components/layout/Layout'

const RecipeAdd = () => {
  return (
    <>
      <h1>Add Recipe</h1>
    </>
  )
}

RecipeAdd.getLayout = function getLayout(page) {
  return <Layout> {page} </Layout>
}

export default RecipeAdd

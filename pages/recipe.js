import Layout from '../components/layout'

const Recipe = () => {
  return (
    <>
      <h1>Recipe</h1>
    </>
  )
}

Recipe.getLayout = function getLayout(page) {
  return (
    <Layout>{page}</Layout>
  )
}

export default Recipe

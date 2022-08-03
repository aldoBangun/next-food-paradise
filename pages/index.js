import { Container } from 'react-bootstrap'
import Layout from '../components/layout/Layout'
import RecipeSlider from '@/components/home/RecipeSlider'
import SearchBar from '@/components/UI/SearchBar'
import RecipeCategoryList from '@/components/home/RecipeCategoryList'
import RecipePopularList from '@/components/home/RecipePopularList'

const Home = () => {
  return (
    <>
      <Container>
        <SearchBar />
        <RecipeCategoryList />
      </Container>
      <RecipeSlider />
      <Container>
        <RecipePopularList />
      </Container>
    </>
  )
}

Home.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>
}

export default Home

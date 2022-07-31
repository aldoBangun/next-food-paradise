import { Container } from 'react-bootstrap'
import Layout from '../components/layout/Layout'

const Home = () => {
  return (
    <>
      <Container>
        <h1>Home</h1>
      </Container>
    </>
  )
}

Home.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>
}

export default Home

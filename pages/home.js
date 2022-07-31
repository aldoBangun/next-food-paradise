import Layout from '../components/layout'

const Home = () => {
  return (
    <>
      <h1>Home</h1>
    </>
  )
}

Home.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}

export default Home

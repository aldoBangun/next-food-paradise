import Layout from '../../components/layout/Layout'

const Chats = () => {
  return <h1>Chats</h1>
}

Chats.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>
}

export default Chats

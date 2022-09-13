import Layout from '@/components/layout/Layout'
import withRouteGuard from 'hoc/withRouteGuard'

const Chats = () => {
  return <h1>Chats</h1>
}

const ChatsWithRouteGuard = withRouteGuard(Chats)

ChatsWithRouteGuard.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>
}

export default ChatsWithRouteGuard

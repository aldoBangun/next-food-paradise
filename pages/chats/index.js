import Layout from '@/components/layout/Layout'
import withRouteGuard from 'hoc/withRouteGuard'
import MaintenancePage from 'pages/MaintenancePage'

const Chats = () => {
  return <MaintenancePage />
}

const ChatsWithRouteGuard = withRouteGuard(Chats)

ChatsWithRouteGuard.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>
}

export default ChatsWithRouteGuard

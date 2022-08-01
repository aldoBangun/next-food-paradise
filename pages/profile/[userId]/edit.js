import Layout from '@/components/layout/Layout'
import { Container } from 'react-bootstrap'

const Edit = () => {
  return (
    <Container>
      <h1>Edit Profile</h1>
    </Container>
  )
}

Edit.getLayout = function getLayout(page) {
  return <Layout header="Edit Profile">{page}</Layout>
}

export default Edit

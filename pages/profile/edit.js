import Layout from '@/components/layout/Layout'
import { Container } from 'react-bootstrap'
import EditOptions from '@/components/profile/EditOptions'
import EditActions from '@/components/profile/EditActions'
import style from '@/styles/Profile.module.css'
import withRouteGuard from 'hoc/withRouteGuard'

const Edit = () => {
  return (
    <Container>
      <div className={style.editProfileContainer}>
        <EditOptions />

        <div className={style.editProfileActions}>
          <Container>
            <EditActions />
          </Container>
        </div>
      </div>
    </Container>
  )
}

const EditWithRouteGuard = withRouteGuard(Edit)

EditWithRouteGuard.getLayout = function getLayout(page) {
  return <Layout header="Edit Profile">{page}</Layout>
}

export default EditWithRouteGuard

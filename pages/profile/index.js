import Layout from '@/components/layout/Layout'
import Avatar from '@/components/profile/Avatar'
import OptionMenu from '@/components/profile/OptionMenu'
import withRouteGuard from 'hoc/withRouteGuard'

const ProfileDetails = () => {
  return (
    <>
      <Avatar />
      <OptionMenu />
    </>
  )
}

const ProfileDetailsWithRouteGuard = withRouteGuard(ProfileDetails)

ProfileDetailsWithRouteGuard.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>
}

export default ProfileDetailsWithRouteGuard

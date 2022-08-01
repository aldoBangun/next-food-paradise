import Layout from '@/components/layout/Layout'
import Avatar from '@/components/profile/Avatar'
import OptionMenu from '@/components/profile/OptionMenu'

const ProfileDetails = () => {
  return (
    <>
      <Avatar url={null} name="Aldo Bangun" />
      <OptionMenu />
    </>
  )
}

ProfileDetails.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>
}

export default ProfileDetails

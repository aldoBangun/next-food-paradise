import Layout from '../../components/layout/Layout'

const ProfileDetails = () => {
  return (
    <>
      <h1>Profile Details</h1>
    </>
  )
}

ProfileDetails.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>
}

export default ProfileDetails

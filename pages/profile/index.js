const Profile = () => {
  return (
    <></>
  )
}

const loggedInUser = {
  userId: 1
}

export async function getServerSideProps(context) {
  return {
    redirect: {
      destination: `/profile/${loggedInUser.userId}`,
      permanent: false
    }
  }
}

export default Profile

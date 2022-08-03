import Link from 'next/link'
import { useRouter } from 'next/router'
import style from '@/styles/Profile.module.css'

const EditOptions = () => {
  const router = useRouter()
  const { userId } = router.query
  const handlePicture = () => {
    alert('Change Profile Picture')
  }

  return (
    <>
      <ul>
        <li className={style.editOptionItem} onClick={handlePicture}>
          Change Profile Picture
        </li>
        <li className={style.editOptionItem}>
          <Link href={`/profile/${userId}/edit/change-password`} passHref>
            <a className="text-decoration-none text-black">Change Password</a>
          </Link>
        </li>
      </ul>
    </>
  )
}

export default EditOptions

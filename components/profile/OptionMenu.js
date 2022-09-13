import { Container, Card, Button } from 'react-bootstrap'
import { Person, Award, Bookmark, HandThumbsUp } from 'react-bootstrap-icons'
import style from '../../styles/Profile.module.css'
import OptionMenuLink from './OptionMenuLink'
import { useDispatch } from 'react-redux'
import { logout } from 'features/slices/auth'
import { useRouter } from 'next/router'

const OptionMenu = () => {
  const dispatch = useDispatch()
  const router = useRouter()

  const handleLogout = () => {
    dispatch(logout())
    router.replace('/login')
  }

  return (
    <>
      <Container className={style.optionMenu}>
        <Card className="border-0 rounded-4 overflow-hidden mb-3">
          <ul className={style.menuList}>
            <OptionMenuLink link="edit" label="Edit Profile">
              <Person size={24} />
            </OptionMenuLink>
            <OptionMenuLink link="my-recipe" label="My Recipe">
              <Award size={24} />
            </OptionMenuLink>
            <OptionMenuLink link="saved-recipe" label="Saved Recipe">
              <Bookmark size={24} />
            </OptionMenuLink>
            <OptionMenuLink link="liked-recipe" label="Liked Recipe">
              <HandThumbsUp size={24} />
            </OptionMenuLink>
          </ul>
        </Card>

        <div className="d-grid w-50 mx-auto">
          <Button variant="danger" className="text-white" onClick={handleLogout}>Logout</Button>
        </div>
      </Container>
    </>
  )
}

export default OptionMenu

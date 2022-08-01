import { Container, Card } from 'react-bootstrap'
import { Person, Award, Bookmark, HandThumbsUp } from 'react-bootstrap-icons'
import style from '../../styles/Profile.module.css'
import OptionMenuLink from './OptionMenuLink'

const OptionMenu = () => {
  return (
    <>
      <Container className={style.optionMenu}>
        <Card className="border-0 rounded-4 overflow-hidden">
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
      </Container>
    </>
  )
}

export default OptionMenu

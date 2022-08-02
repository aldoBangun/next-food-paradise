import { Container, Nav } from 'react-bootstrap'
import { House, PlusSquare, Chat, Person } from 'react-bootstrap-icons'
import styles from '../../styles/Navbar.module.css'
import NavLink from './NavLink'

const Navbar = () => {

  return (
    <>
      <Container className={styles.navbar}>
        <Nav className="d-flex align-items-center justify-content-between h-100">
          <NavLink label="Home" link="/">
            <House size={24}/>
          </NavLink>
          <NavLink label="Add Recipe" link="/recipes/add">
            <PlusSquare size={24}/>
          </NavLink>
          <NavLink label="Chats" link="/chats">
            <Chat size={24}/>
          </NavLink>
          <NavLink label="Profile" link="/profile/plase-make-this-dinamic-later">
            <Person size={24}/>
          </NavLink>
        </Nav>
      </Container>
    </>
  )
}

export default Navbar

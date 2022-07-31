import { Container } from 'react-bootstrap'
import styles from '../styles/Navbar.module.css'

const Navbar = () => {
  return (
    <>
      <nav className={`${styles.navbar} bg-primary`}>
        <Container>
          <h6>Navbar</h6>
        </Container>
      </nav>
    </>
  )
}

export default Navbar

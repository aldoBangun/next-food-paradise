import Link from 'next/link'
import { Nav } from 'react-bootstrap'
import { useRouter } from 'next/router'
import style from '../../styles/Navbar.module.css'

const NavLink = ({ link, label, children }) => {
  const router = useRouter()
  const { asPath } = router
  const isActive = asPath === link
  // const activeLink = ['text-primary bg-verylightblue bg-opacity-10', 'text-white bg-primary']

  return (
    <Nav.Item className={style.navItem}>
      <Link href={link} passHref>
        {/* <a className={`${isActive ? activeLink[1] : ''} d-flex align-items-center gap-2 p-2 rounded-3 text-decoration-none`}> */}
        <a className={`${style.link} ${isActive ? style.isActive : ''}`}>
          {children}
          {isActive && (<span>{label}</span>)}
        </a>
      </Link>
    </Nav.Item>
  )
}

export default NavLink

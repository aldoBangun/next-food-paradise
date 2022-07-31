import Link from 'next/link'
import { Nav } from 'react-bootstrap'
import { useRouter } from 'next/router'
import style from '../../styles/Navbar.module.css'

const NavLink = ({ link, label, children }) => {
  const router = useRouter()
  const { asPath } = router
  const isActive = asPath === link

  return (
    <Nav.Item className={style.navItem}>
      <Link href={link}>
        <div className={`${isActive ? 'text-primary bg-verylightblue bg-opacity-10' : ''} d-flex align-items-center gap-2 p-2 rounded-2`}>
          {children}
          {isActive && (<span>{label}</span>)}
        </div>
      </Link>
    </Nav.Item>
  )
}

export default NavLink

import Header from './Header'
import Navbar from './Navbar'
import style from '@/styles/Layout.module.css'

const Layout = ({ header, children }) => {
  return (
    <>
      {header && <Header header={header} />}
      <div className={style.layout}> {children} </div>
      {!header && <Navbar />}
    </>
  )
}

export default Layout

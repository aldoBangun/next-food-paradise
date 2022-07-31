import Navbar from './navbar'

const Layout = ({ children }) => {
  return (
    <>
      <main> { children } </main>
      <Navbar />
    </>
  )
}

export default Layout

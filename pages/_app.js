import '../styles/globals.css'
import '../styles/scss/globals.scss'
import withRedux from 'hoc/withRedux'
import withAuth from 'hoc/withAuth'
import axios from 'axios'

axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_URL

axios.interceptors.request.use((config) => {
  return config
}, (error) => {
  Promise.reject(error)
})

axios.interceptors.response.use((config) => {
  return config
}, (error) => {
  Promise.reject(error)
})

const MyApp = ({ Component, pageProps }) => {
  const getLayout = Component.getLayout || ((page) => page)
  return getLayout(<Component {...pageProps} />)
}

const MyAppWithAuth = withAuth(MyApp)
const MyAppWithRedux = withRedux(MyAppWithAuth)
export default MyAppWithRedux

import '../styles/globals.css'
import '../styles/scss/globals.scss'
import withRedux from 'hoc/withRedux'
import withAuth from 'hoc/withAuth'
import axios from 'axios'
import { store } from 'app/store'

const select = state => state.auth.token
const listener = () => {
  const token = select(store.getState())
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
}

store.subscribe(listener)
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

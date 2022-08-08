import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from '../app/store'
import { Provider } from 'react-redux'
import '../styles/globals.css'
import '../styles/scss/globals.scss'
import axios from 'axios'

axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_URL


axios.interceptors.request.use((config) => {
  if(typeof window !== 'undefined') {
    const storage = localStorage.getItem('persist:root')
  
    if(storage) {
      const storageJSON = JSON.parse(storage)
      const token = storageJSON?.auth

      if(config?.category !== "noAuth" && token) {
        config.headers = {
          Authorization : `Bearer ${token}`
        }
      }
    }
  }

  return config
}, (error) => {
  Promise.reject(error)
})

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page)

  return (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      {getLayout(<Component {...pageProps} />)}
    </PersistGate>
  </Provider>
  )
}

export default MyApp

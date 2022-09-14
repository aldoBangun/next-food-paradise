import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from '../app/store'
import { Provider } from 'react-redux'

const withRedux = (Component) => {
  const Wrapper = (props) => {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Component {...props} />
        </PersistGate>
      </Provider>
    )
  }

  return Wrapper
}

export default withRedux
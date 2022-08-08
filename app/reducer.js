import { combineReducers } from 'redux'
import auth from '../features/slices/auth'

const reducer = {
  auth,
}

export default combineReducers(reducer)
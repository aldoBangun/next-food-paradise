import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUser, resetCurrentUser } from 'features/slices/currentUser'
import jwtDecode from 'jwt-decode'
import { logout } from 'features/slices/auth'

const withAuth = (Component) => {
  const Wrapper = (props) => {
    const dispatch = useDispatch()
    const authState = useSelector(state => state.auth)
    const { token } = authState

    useEffect(() => {
      if (!token) {
        dispatch(resetCurrentUser())
        return
      }
  
      const decoded = jwtDecode(token)
      const { userId, exp } = decoded
      const EXP_DATE_IN_MILISECON = exp * 1000
  
      if (EXP_DATE_IN_MILISECON < Date.now()) {
        dispatch(logout())
        dispatch(resetCurrentUser())
        return
      }

      dispatch(getUser(userId))
    }, [token, dispatch])

    return <Component {...props} />
  }

  return Wrapper
}

export default withAuth
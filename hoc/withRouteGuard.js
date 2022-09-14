import { useSelector } from 'react-redux'
import NoAuth from '@/components/auth/NoAuth'

const withRouteGuard = (Component) => {
  const Wrapper = (props) => {
    const token = useSelector((state) => state.auth.token)
    return <> {token ? <Component {...props} /> : <NoAuth />} </>
  }
  return Wrapper
}

export default withRouteGuard

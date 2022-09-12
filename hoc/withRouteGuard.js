const withRouteGuard = (Component) => {
  const Wrapper = (props) => {
    return <Component {...props} />
  }

  return Wrapper
}

export default withRouteGuard
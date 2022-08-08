import React, { useEffect } from 'react'
import LoginForm from '@/components/auth/LoginForm'
import style from '@/styles/Auth.module.css'
import { Person } from 'react-bootstrap-icons'
import { Container } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/router'

const Login = () => {
  const authSelector = useSelector(state => state.auth)
  const { token, error: authError} = authSelector
  const router = useRouter()
  
  useEffect(() => {
    if(token) {
      router.replace('/')
    }
  }, [router, token, authSelector])

  return (
    <div className={style.authLayout}>
      <Container>
        <div className="d-flex flex-column align-items-center gap-3 mb-4">
          <div className={style.authAvatar}>
            <Person size={80} color="white" />
          </div>
          <div className="text-center">
            <h3 className="fs-3 mb-0 text-primary">Welcome!</h3>
            <p className="text-lightgray">Log in to your exiting account.</p>
          </div>
        </div>
        {authError && <p className="mb-0 text-danger">{authError}</p>}
        <LoginForm />
      </Container>
    </div>
  )
}

export async function getServerSideProps(context) {
  return { props: {} }
}

export default Login

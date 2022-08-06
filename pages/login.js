import React from 'react'
import LoginForm from '@/components/auth/LoginForm'
import style from '@/styles/Auth.module.css'
import { Person } from 'react-bootstrap-icons'
import { Container } from 'react-bootstrap'

const Login = () => {

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
        <LoginForm />
      </Container>
    </div>
  )
}

export default Login

/* eslint-disable react/no-unescaped-entities */
import RegisterForm from '@/components/auth/RegisterForm'
import { Container } from 'react-bootstrap'
import style from '@/styles/Auth.module.css'

const Register = () => {
  return (
    <>
      <div className={style.authLayout}>
        <Container>
          <div className="text-center">
            <h3 className="fs-3 mb-0 text-primary">Let's Get Started!</h3>
            <p className="text-lightgray">Create new account to access all feautures</p>
          </div>
          <RegisterForm />
        </Container>
      </div>
    </>
  )
}

export default Register

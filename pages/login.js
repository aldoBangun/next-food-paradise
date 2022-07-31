import React from 'react'
import { useRouter } from 'next/router'

const Login = () => {
  const router = useRouter()
  const login = () => {
    router.push('/')
  }

  return (
    <div>
      <h1>Login</h1>
      <p className="text-darkgray">Frontend Developer</p>
      <p className="text-gray">Frontend Developer</p>
      <button onClick={login} className="btn btn-primary">Login</button>
    </div>
  )
}

export default Login

/* eslint-disable react/no-unescaped-entities */
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { Form, Button } from 'react-bootstrap'
import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux'
import { login } from 'features/thunks/auth'

const LoginForm = () => {
  const authState = useSelector(state => state.auth)
  const { loading } = authState
  const dispatch = useDispatch()
  const LoginSchema = Yup.object().shape({
    email: Yup.string()
      .email('Invalid email')
      .required('Email could not be empty'),
    password: Yup.string()
      .min(6, 'Password must contain at least 6 characters')
      .max(20, 'Password cannot be more than 20 characters')
      .required('Password could not be empty'),
  })

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: LoginSchema,
    onSubmit: (values) => {
      dispatch(login(values))
    },
  })

  return (
    <>
      <Form onSubmit={formik.handleSubmit} className="mb-3">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          {formik.errors.email && formik.touched.email && (
            <Form.Text className="text-danger">{formik.errors.email}</Form.Text>
          )}
        </Form.Group>

        <Form.Group className="mb-5" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
          {formik.errors.password && formik.touched.password && (
            <Form.Text className="text-danger">
              {formik.errors.password}
            </Form.Text>
          )}

          <Form.Text className="d-block text-end mt-2">
            <Link href="/forgot-password" passHref>
            <a className="text-decoration-none text-gray">

            Forgot Password?
            </a>
            </Link>
          </Form.Text>
        </Form.Group>

        <div className="d-grid">
          <Button type="submit" className="text-white" disabled={loading}>
            {loading ? 'Loading...' : 'Login'}
          </Button>
        </div>
      </Form>
      <p className="text-center text-darkgray">
        Don't Have an account?
        <Link href="/register" passHref>
          <a className="text-decoration-none text-primary"> Sign Up</a>
        </Link>
      </p>
    </>
  )
}

export default LoginForm

/* eslint-disable react/no-unescaped-entities */
import { Form, Button } from 'react-bootstrap'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import Link from 'next/link'

const RegisterForm = () => {
  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

  const RegisterSchema = Yup.object().shape({
    name: Yup.string()
      .min(4, 'Name could not be less than 4 characters')
      .max(20, 'Name could not be more than 20 characters')
      .required('Name conld not be empty'),
    email: Yup.string()
      .email('Invalid email')
      .required('Email could not be empty'),
    phone: Yup.string()
      .matches(phoneRegExp, 'Phone number is not valid')
      .required('Phone cound not be empty'),
    password: Yup.string()
      .min(6, 'Password must contain at least 6 characters')
      .max(20, 'Password cannot be more than 20 characters')
      .required('Password could not be empty'),
    passwordConfirm: Yup.string().oneOf(
      [Yup.ref('password'), null],
      'Password not match'
    ),
  })

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      password: '',
      passwordConfirm: '',
    },
    validationSchema: RegisterSchema,
    onSubmit(values) {
      console.log(values)
    },
  })

  return (
    <>
      <Form onSubmit={formik.handleSubmit} className="mb-3">
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="name"
            name="name"
            onChange={formik.handleChange}
            value={formik.values.name}
          />
          {formik.errors.name && formik.touched.name && (
            <Form.Text className="text-danger">{formik.errors.name}</Form.Text>
          )}
        </Form.Group>

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

        <Form.Group className="mb-3" controlId="formBasicPhone">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            type="text"
            placeholder="phone numbers"
            name="phone"
            onChange={formik.handleChange}
            value={formik.values.phone}
          />
          {formik.errors.phone && formik.touched.phone && (
            <Form.Text className="text-danger">
              {formik.errors.phone}
            </Form.Text>
          )}
          </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
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
          </Form.Group>

        <Form.Group className="mb-5" controlId="formBasicConfirmPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Confirm Password"
            name="passwordConfirm"
            onChange={formik.handleChange}
            value={formik.values.passwordConfirm}
          />
          {formik.errors.passwordConfirm && formik.touched.passwordConfirm && (
            <Form.Text className="text-danger">
              {formik.errors.passwordConfirm}
            </Form.Text>
          )}
          </Form.Group>

        <div className="d-grid">
          <Button className="text-white" type="submit">
            CREATE
          </Button>
        </div>
      </Form>
      <p className="text-center text-darkgray">
        Already have account?
        <Link href="/login" passHref>
          <a className="text-decoration-none text-primary"> Log In Here</a>
        </Link>
      </p>
    </>
  )
}

export default RegisterForm

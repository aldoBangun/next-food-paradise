import { Search } from 'react-bootstrap-icons'
import { Form } from 'react-bootstrap'
import style from '@/styles/Home.module.css'
import { useRouter } from 'next/router'
import { useFormik } from 'formik'
import * as Yup from 'yup'

const SearchBar = () => {
  const router = useRouter()
  const SearchSchema = Yup.object().shape({
    keyword: Yup.string().required('Please type something to search'),
  })
  const formik = useFormik({
    initialValues: {
      keyword: '',
    },
    validationSchema: SearchSchema,
    onSubmit: ({ keyword }) => {
      router.push(`/search?keyword=${keyword}`)
    }
  })

  return (
    <Form onSubmit={formik.handleSubmit} className="py-4">
      <Form.Group className="position-relative">
        <Form.Control
          className={`${
            formik.errors.keyword ? 'border-danger' : ''
          } py-2 ps-5 rounded-4`}
          type="text"
          name="keyword"
          placeholder={
            formik.errors.keyword
              ? formik.errors.keyword
              : 'Search pasta, bread, etc'
          }
          onChange={formik.handleChange}
          value={formik.values.keyword}
        />
        <button type="submit" className={style.iconSearch}>
          <Search size={20} />
        </button>
      </Form.Group>
    </Form>
  )
}

export default SearchBar

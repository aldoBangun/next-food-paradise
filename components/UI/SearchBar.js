import { Search } from 'react-bootstrap-icons'
import { Form } from 'react-bootstrap'
import style from '@/styles/Home.module.css'

const SearchBar = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <Form onSubmit={handleSubmit} className="py-4">
      <Form.Group className="position-relative">
        <button type="submit" className={style.iconSearch}>
          <Search  size={20} />
        </button>
        <Form.Control className="py-2 ps-5 rounded-4" type="text" placeholder="Search pasta, bread, etc" />
      </Form.Group>
    </Form>
  )
}

export default SearchBar

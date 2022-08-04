import { Form, FloatingLabel, Button } from 'react-bootstrap'
import style from '@/styles/Recipe.module.css'

const CommentForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <>
      <Form onSubmit={handleSubmit} className="d-flex flex-column gap-3">
        <FloatingLabel controlId="floatingTextarea2" label="Comment:" className="text-gray">
          <Form.Control
            as="textarea"
            placeholder="Leave a comment here"
            className={style.commentTextarea}
          />
        </FloatingLabel>
        <div className="d-grid">
          <Button type="submit" className="text-white">Post Comment</Button>
        </div>
      </Form>
    </>
  )
}

export default CommentForm

import { Form, FloatingLabel, Button } from 'react-bootstrap'
import style from '@/styles/Recipe.module.css'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useDispatch, useSelector } from 'react-redux'
import { createComment } from 'features/slices/comments'

const CommentForm = ({ recipeId }) => {
  const dispatch = useDispatch()
  const currentUserState = useSelector(state => state.currentUser)
  const { user } = currentUserState
  const commentsState = useSelector(state => state.comments)
  const { loading } = commentsState

  const CommentSchema = Yup.object().shape({
    message: Yup.string()
      .min(4, 'Plase add at least 4 characters')
      .max(100, 'Comment cannot be more than 100 characters (including spaces)')
  })

  const formik = useFormik({
    initialValues: {
      message: ''
    },
    validationSchema: CommentSchema,
    onSubmit: ({ message }) => {
      const data = {
        recipeId,
        userId: user.user_id,
        message
      }

      dispatch(createComment(data))
    }
  })

  return (
    <>
      <Form onSubmit={formik.handleSubmit} className="d-flex flex-column gap-3">
        <FloatingLabel controlId="floatingTextarea2" label="Comment:" className="text-gray">
          <Form.Control
            as="textarea"
            placeholder="Leave a comment here"
            name="message"
            onChange={formik.handleChange}
            value={formik.values.message}
            className={style.commentTextarea}
          />
        </FloatingLabel>
        <div className="d-grid">
          <Button type="submit" className="text-white" disabled={loading}>
            {loading ? 'Posting..' : 'Post Comment'}
          </Button>
        </div>
      </Form>
    </>
  )
}

export default CommentForm

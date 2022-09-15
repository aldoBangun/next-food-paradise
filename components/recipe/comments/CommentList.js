import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getComments } from 'features/slices/comments'
import CommentItem from './CommentItem'

const CommentList = ({ recipeId }) => {
  const dispatch = useDispatch()
  const commentsState = useSelector(state => state.comments)
  const { comments } = commentsState

  useEffect(() => {
    dispatch(getComments(recipeId))
  }, [dispatch, recipeId])

  if (!comments) return <p className="pt-4 text-grap">No Comments</p>

  return (
    <>
      <div className="pt-4">
        <p className="text-gray">Comment:</p>
        <div className="d-flex flex-column gap-3">
          {comments.map((comment) => (
            <CommentItem key={comment.comment_id} {...comment} />
          ))}
        </div>
      </div>
    </>
  )
}

export default CommentList

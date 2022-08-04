import CommentItem from './CommentItem'

const CommentList = () => {
  const comments = [
    {
      commentId: 1,
      name: 'Larry',
      message: 'This is tasty!',
      avatar: 'https://picsum.photos/id/91/100',
    },
    {
      commentId: 2,
      name: 'Jessica',
      message: 'Easy to follow tutorial, nice recipe btw!',
      avatar: 'https://picsum.photos/id/92/100',
    },
  ]
  return (
    <>
      <div className="pt-4">
        <p className="text-gray">Comment:</p>
        <div className="d-flex flex-column gap-3">
          {comments.map((comment) => (
            <CommentItem key={comment.commentId} {...comment} />
          ))}
        </div>
      </div>
    </>
  )
}

export default CommentList

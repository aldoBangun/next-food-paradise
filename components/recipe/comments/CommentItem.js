import Image from 'next/image'
import style from '@/styles/Recipe.module.css'

const CommentItem = (props) => {
  const { avatar, name, message } = props

  return (
    <>
      <div className="d-flex align-items-center gap-4">
        <Image
          src={avatar}
          alt={name}
          width={48}
          height={48}
          className="rounded-circle object-cover"
        />
        <div>
          <h6 className={style.commentName}>{name}</h6>
          <p className={style.commentMessage}>{message}</p>
        </div>
      </div>
    </>
  )
}

export default CommentItem

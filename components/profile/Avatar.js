import { Person } from 'react-bootstrap-icons'
import Image from 'next/image'
import { useSelector } from 'react-redux'

const Avatar = () => {
  const currentUser = useSelector((state) => state.currentUser.user)
  const name = currentUser?.name
  const url = currentUser?.avatar
  const imageSize = 100

  return (
    <>
      <div
        className="d-flex align-items-center flex-column justify-content-center bg-primary gap-3 p-3"
        style={{ minHeight: '24rem' }}
      >
        {url ? (
          <Image
            className="rounded-circle"
            src={url}
            alt={name}
            height={imageSize}
            width={imageSize}
          />
        ) : (
          <div
            className="d-flex align-items-center justify-content-center bg-lightgray rounded-circle"
            style={{ height: imageSize, width: imageSize }}
          >
            <Person size={48} color="white" />
          </div>
        )}
        <h5 className="text-white">{name}</h5>
      </div>
    </>
  )
}

export default Avatar

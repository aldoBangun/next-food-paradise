import { Person } from 'react-bootstrap-icons'
import Image from 'next/image'

const Avatar = ({ url, name }) => {
  return (
    <>
      <div
        className="d-flex align-items-center flex-column justify-content-center bg-primary gap-3 p-3"
        style={{ minHeight: '24rem' }}
      >
        {url ? (
          <Image src={url} alt={name} />
        ) : (
          <div
            className="d-flex align-items-center justify-content-center bg-lightgray rounded-circle"
            style={{ height: 100, width: 100 }}
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

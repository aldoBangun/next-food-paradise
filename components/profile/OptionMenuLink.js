import Link from 'next/link'
import { useRouter } from 'next/router'
import { ChevronRight } from 'react-bootstrap-icons'

const OptionMenuLink = ({ link, label, children }) => {
  const router = useRouter()
  const { userId } = router?.query

  return (
    <>
      <Link href={`/profile/[userId]/${link}`} as={`/profile/${userId}/${link}`}>
        <li className="d-flex align-items-center justify-content-between p-3">
          <div className="d-flex align-items-center gap-3">
            <span className="text-primary">
              {children}
            </span>
            <span>{label}</span>
          </div>
          <ChevronRight />
        </li>
      </Link>
    </>
  )
}

export default OptionMenuLink

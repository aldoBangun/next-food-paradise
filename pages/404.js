import Image from 'next/image'
import Link from 'next/link'
import notFoundIlustration from 'public/assets/not-found.svg'

const PageNotFound = () => (
  <div className={`d-flex align-items-center justify-content-center h-full`}>
      <div>
        <div className="d-flex justify-content-center">
          <Image 
            src={notFoundIlustration}
            alt="ilustration"
            height={360}
            width={240}
          />
        </div>
        <div className="text-center">
          <h3 className="mb-3 text-muted">Page Not Found</h3>
          <p>
            <Link href='/' passHref>
              <a>Back to home</a>
            </Link>
          </p>
        </div>
      </div>
  </div>
)

export default PageNotFound
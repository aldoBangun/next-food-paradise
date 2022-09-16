import Image from 'next/image'
import Link from 'next/link'
import errorIlustration from 'public/assets/500.svg'

const CustomError = () => (
  <div className={`d-flex align-items-center justify-content-center h-full`}>
      <div>
        <div className="d-flex justify-content-center">
          <Image 
            src={errorIlustration}
            alt="ilustration"
            height={360}
            width={240}
          />
        </div>
        <div className="text-center">
          <h3 className="mb-3 text-muted">Something went wrong</h3>
          <p>
            <Link href='/' passHref>
              <a>Back to home</a>
            </Link>
          </p>
        </div>
      </div>
  </div>
)

export default CustomError
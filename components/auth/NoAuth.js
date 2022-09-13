import { useRouter } from 'next/router'
import Image from 'next/image'
import Link from 'next/link'
import loginIlustration from 'public/assets/login-ilustration.svg'
import style from '@/styles/NoAuth.module.css'
import CryptoJS from 'crypto-js'

const NoAuth = () => {
  const router = useRouter()
  const { pathname } = router
  const encryptedPath = CryptoJS.AES.encrypt(pathname, process.env.NEXT_PUBLIC_CRYPTO_SECRET_KEY)
  console.log(process.env.NEXT_PUBLIC_CRYPTO_SECRET_KEY)

  return (
    <div className={`${style.pageHeight} d-flex align-items-center justify-content-center`}>
      <div>
        <div className="d-flex justify-content-center">
          <Image 
            src={loginIlustration}
            alt="ilustration"
            height={360}
            width={240}
          />
        </div>
        <div className="text-center">
          <p className="mb-1">In order to access this page</p>
          <p>
            you need to {' '}
            <Link href={`/login?redirect=${encryptedPath}`} passHref>
              <a>Login</a>
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default NoAuth
import Image from 'next/image'
import Link from 'next/link'
import maintenanceIlustration from 'public/assets/maintenance-2.svg'

const MaintenancePage = () => (
  <div className={`d-flex align-items-center justify-content-center h-full`}>
    <div>
      <div className="d-flex justify-content-center">
        <Image
          src={maintenanceIlustration}
          alt="ilustration"
          height={360}
          width={240}
        />
      </div>
      <div className="text-center">
        <h3 className="mb-3 text-muted">Under Maintenance</h3>
        <p>
          <Link href="/" passHref>
            <a>Back to home</a>
          </Link>
        </p>
      </div>
    </div>
  </div>
)

export default MaintenancePage

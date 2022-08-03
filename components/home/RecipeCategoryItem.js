import Link from 'next/link'

const RecipeCategoryItem = ({ link, label, children }) => {
  return (
    <Link href={`/recipes/cat/${link}`} passHref>
      <a className="text-decoration-none d-flex flex-column align-items-center gap-2">
        {children}
        <p className="mb-0 fw-semibold text-darkgray">{label}</p>
      </a>
    </Link>
  )
}

export default RecipeCategoryItem

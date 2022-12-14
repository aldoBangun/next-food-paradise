import { Card } from 'react-bootstrap'
import Image from 'next/image'
import { StarFill } from 'react-bootstrap-icons'
import Link from 'next/link'
import style from '@/styles/Home.module.css'

const RecipePopularItem = (props) => {
  const { recipe_id, photo, title, rating = 4.5, category } = props

  return (
    <li className={`${style.popularItem} rounded-3 overflow-hidden`}>
      <Link href={`/recipes/${recipe_id}`} passHref>
        <a className="text-decoration-none">
          <Card className="border-0 bg-transparent">
            <div className="d-flex align-items-center gap-4">
              <Image
                className="flex-shrink-4 rounded-3"
                src={photo}
                alt={title}
                height={100}
                width={100}
              />
              <div>
                <h6 className="mb-3 text-black">{title}</h6>
                <div className="d-flex align-items-center gap-2">
                  <StarFill color="#FFB200" />
                  <span className="lh-1 text-black">{rating}</span>
                  <span className="lh-1 text-gray text-capitalize">{category}</span>
                </div>
              </div>
            </div>
          </Card>
        </a>
      </Link>
    </li>
  )
}

export default RecipePopularItem

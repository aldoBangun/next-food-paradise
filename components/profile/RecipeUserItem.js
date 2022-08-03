import { Card } from 'react-bootstrap'
import Image from 'next/image'
import Link from 'next/link'
import style from '@/styles/Profile.module.css'
import RecipeUserActions from './RecipeUserActions'

const RecipeUserItem = (props) => {
  const {
    recipeId,
    title,
    photo,
    restaurant,
    variant,
    showActions = false,
  } = props

  return (
    <>
      <Card className={`${style.card} border-0 overflow-hidden cursor-pointer`}>
        <div className="d-flex align-items-center gap-3">
          <div>
            <Image
              src={photo}
              alt={title}
              width={80}
              height={80}
              className="rounded-4"
            />
          </div>
          <div className="flex-grow-1">
            <Link href={`/recipes/${recipeId}`} passHref>
              <a className="text-decoration-none text-black">
                <h5 className="mb-0">{title}</h5>
              </a>
            </Link>
            <small className="text-gray">{restaurant}</small>
            <h6>{variant}</h6>
          </div>
          <div className="flex-shrink-0">
            <RecipeUserActions show={showActions}/>
          </div>
        </div>
      </Card>
    </>
  )
}

export default RecipeUserItem

import { Card } from 'react-bootstrap'
import Image from 'next/image'
import Link from 'next/link'
import style from '@/styles/Profile.module.css'

const RecipeUserItem = (props) => {
  const { recipeId, title, photo, restaurant, variant } = props

  return (
    <>
      <Link href={`/recipes/${recipeId}`}>
        <Card className={`${style.card} border-0 overflow-hidden cursor-pointer`}>
          <div className="d-flex gap-3">
            <div>
              <Image src={photo} alt={title} width={80} height={80} className="rounded-4" />
            </div>
            <div>
              <h5 className="mb-0">{title}</h5>
              <small className="text-gray">{restaurant}</small>
              <h6>{variant}</h6>
            </div>
          </div>
        </Card>
      </Link>
    </>
  )
}

export default RecipeUserItem

import style from '@/styles/Home.module.css'
import { Card } from 'react-bootstrap'
import Link from 'next/link'

const RecipeSliderItem = (props) => {
  const { recipe_id, title, photo } = props

  return (
    <Link href={`/recipes/${recipe_id}`} passHref>
      <a className="text-decoration-none">
        <Card
          className={`${style.sliderItem} border-0 rounded-4 py-3 px-3 d-flex justify-content-end overflow-hidden shadow`}
          style={{ backgroundImage: `url(${photo})` }}
        >
          <h6 className={style.sliderText}>{title}</h6>
        </Card>
      </a>
    </Link>
  )
}

export default RecipeSliderItem

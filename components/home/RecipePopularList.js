import { useEffect } from 'react'
import Link from 'next/link'
import style from '@/styles/Home.module.css'
import RecipePopularItem from './RecipePopularItem'
import { useDispatch, useSelector } from 'react-redux'
import { getPopularRecipe } from 'features/thunks/popularRecipe'
import Loader from '../UI/Loader'

const RecipePopularList = () => {
  const popularRecipe = useSelector(state => state.popularRecipe)
  const { recipes, loading } = popularRecipe
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPopularRecipe())
  }, [dispatch])

  return (
    <>
      <div className="d-flex justify-content-between">
        <h5 className="mb-4">Popular Recipes</h5>
        <Link href="/recipes/popular" passHref>
          <a className={style.link}>
            More info
          </a>
        </Link>
      </div>
      <ul className="d-flex flex-column gap-3">
        {recipes && recipes.map((recipe) => (
          <RecipePopularItem key={recipe.recipe_id} {...recipe} />
        ))}
      </ul>
      {loading && <Loader />}
    </>
  )
}

export default RecipePopularList

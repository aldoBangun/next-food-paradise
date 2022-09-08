import { useEffect } from 'react'
import style from '@/styles/Home.module.css'
import RecipeSliderItem from './RecipeSliderItem'
import { Container } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { getPopularRecipe } from 'features/thunks/popularRecipe'

const RecipeSlider = () => {
  const popularRecipe = useSelector(state => state.popularRecipe)
  const recipes = popularRecipe?.recipes
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPopularRecipe())
  }, [dispatch])

  return (
    <>
      <Container>
        <h5 className="mb-3">New Recipes</h5>
      </Container>
      <div>
        <div className={style.slider}>
          {recipes && recipes.map((recipe) => (
            <RecipeSliderItem key={recipe.recipe_id} {...recipe} />
          ))}
        </div>
      </div>
    </>
  )
}

export default RecipeSlider

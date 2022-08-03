import style from '@/styles/Home.module.css'
import RecipeSliderItem from './RecipeSliderItem'
import { Container } from 'react-bootstrap'

const RecipeSlider = () => {
  const recipes = [
    {
      recipeId: 1,
      photo: 'https://picsum.photos/id/9/200',
      title: 'Fire Pizza',
      restaurant: 'Veg Pizza',
      variant: 'Spicy',
    },
    {
      recipeId: 2,
      photo: 'https://picsum.photos/id/10/200',
      title: 'Sweet Taco',
      restaurant: 'Taco Mania',
      variant: 'Sweet',
    },
    {
      recipeId: 3,
      photo: 'https://picsum.photos/id/101/200',
      title: 'Sweet Taco',
      restaurant: 'Taco Mania',
      variant: 'Sweet',
    },
    {
      recipeId: 4,
      photo: 'https://picsum.photos/id/102/200',
      title: 'Sweet Taco',
      restaurant: 'Taco Mania',
      variant: 'Sweet',
    },
  ]

  return (
    <>
      <Container>
        <h5 className="mb-3">New Recipes</h5>
      </Container>
      <div>
        <div className={style.slider}>
          {recipes.map((recipe) => (
            <RecipeSliderItem key={recipe.recipeId} {...recipe} />
          ))}
        </div>
      </div>
    </>
  )
}

export default RecipeSlider

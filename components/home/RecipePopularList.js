import Link from 'next/link'
import style from '@/styles/Home.module.css'
import RecipePopularItem from './RecipePopularItem'

const RecipePopularList = () => {
  const recipes = [
    {
      recipeId: 1,
      photo: 'https://picsum.photos/id/99/200',
      title: 'Was Soup Ges',
      category: 'Soup',
      rating: 4.8,
    },
    {
      recipeId: 2,
      photo: 'https://picsum.photos/id/109/200',
      title: 'Garry The Lobster',
      category: 'Seafood',
      rating: 4.7,
    },
    {
      recipeId: 3,
      photo: 'https://picsum.photos/id/102/200',
      title: 'Kupangs Fried Chicken',
      category: 'Chicken',
      rating: 4.7,
    },
  ]

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
        {recipes.map((recipe) => (
          <RecipePopularItem key={recipe.recipeId} {...recipe} />
        ))}
      </ul>
    </>
  )
}

export default RecipePopularList

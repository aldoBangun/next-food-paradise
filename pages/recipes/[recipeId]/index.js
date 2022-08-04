import DetailHero from '@/components/recipe/detail/DetailHero'
import DetailTabs from '@/components/recipe/detail/DetailTabs'
import { useRouter } from 'next/router'

const RecipeDetails = () => {
  const router = useRouter()
  const { recipeId } = router.query
  const recipe = {
    recipeId,
    title: 'Pizza Zaro',
    photo: 'https://picsum.photos/id/19/400',
    userId: 1,
    ingredients: ["step 1", "step 2", "step 3"],
    videos: [
      {
        videoId: 1,
        videoId: 2,
        videoId: 3
      }
    ],
    comments: [
      {
        commentId: 99,
      },
      {
        commentId: 120,
      },
      {
        commentId: 20,
      },
    ],
  }

  return (
    <>
      <DetailHero image={recipe.photo} />
      <DetailTabs />
    </>
  )
}

export default RecipeDetails

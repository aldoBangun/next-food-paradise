import { useEffect } from 'react'
import DetailHero from '@/components/recipe/detail/DetailHero'
import DetailTabs from '@/components/recipe/detail/DetailTabs'
import { useRouter } from 'next/router'
import { useSelector, useDispatch } from 'react-redux'
import { getRecipeDetail } from 'features/thunks/recipeDetail'

const RecipeDetails = () => {
  const router = useRouter()
  const { recipeId } = router.query
  const recipeDetail = useSelector((state) => state.recipeDetail)
  const { recipe } = recipeDetail
  const dispatch = useDispatch()

  useEffect(() => {
    if (recipeId) dispatch(getRecipeDetail(recipeId))
  }, [dispatch, recipeId])

  return (
    <>
      {recipe && (
        <>
          <DetailHero recipe={recipe} />
          <DetailTabs {...recipe} />
        </>
      )}
    </>
  )
}

export default RecipeDetails

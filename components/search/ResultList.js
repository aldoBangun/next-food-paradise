import RecipePopularItem from '@/components/home/RecipePopularItem'
import { useRouter } from 'next/router'

const ResultList = ({ result = [] }) => {
  const router = useRouter()
  const keyword = router?.query?.keyword

  return (
    <>
      {result.length ? (
        <ul>
          {result.map((item) => (
            <RecipePopularItem key={item.recipe_id} {...item} />
          ))}
        </ul>
      ) : (
        <h4 className="text-gray"> {keyword ? <>&quot;{keyword}&quot;</> : 'Result'} not found</h4>
      )}
    </>
  )
}

export default ResultList

import RecipePopularItem from '@/components/home/RecipePopularItem'

const ResultList = () => {
  return (
    <>
      {result.length ? (
        <ul>
          {result.map(item => (
            <RecipePopularItem key={item.recipe_id} {...item} />
          ))}
        </ul>
      ) : (
        <h3> `&quot`{search}`&quot` not found</h3>
      )}
    </>
  )
}

export default ResultList

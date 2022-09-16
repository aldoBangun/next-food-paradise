import RecipeCategoryItem from './RecipeCategoryItem'
import Dessert from '../icons/Dessert'
import SeaFood from '../icons/SeaFood'
import Soup from '../icons/Soup'

const RecipeCategoryList = () => {
  return (
    <>
      <h5 className="mb-3">Categories</h5>
      <ul className="d-flex align-items-center justify-content-between mb-4">
        <li>
          <RecipeCategoryItem link="soup" label="Soup">
            <Soup size={80} />
          </RecipeCategoryItem>
        </li>
        <li>
          <RecipeCategoryItem link="chicken" label="Chicken">
            <Dessert size={80} color="salmon" />
          </RecipeCategoryItem>
        </li>
        <li>
          <RecipeCategoryItem link="seafood" label="Seafood">
            <SeaFood size={80} />
          </RecipeCategoryItem>
        </li>
        <li>
          <RecipeCategoryItem link="dessert" label="Dessert">
            <Dessert size={80} />
          </RecipeCategoryItem>
        </li>
      </ul>
    </>
  )
}

export default RecipeCategoryList

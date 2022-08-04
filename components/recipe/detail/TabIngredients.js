const TabIngredients = ({ ingredients = [] }) => {
  return (
    <>
      <ul className="bg-verylightgray p-3 rounded-4">
        {ingredients.map((item, index) => (
          <li key={index}>- {item}</li>
        ))}
        {!ingredients.length && (<p>There is no ingredients to success!</p>)}
      </ul>
    </>
  )
}

export default TabIngredients

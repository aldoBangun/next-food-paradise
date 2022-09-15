const TabIngredients = ({ ingredients = [] }) => {
  return (
    <>
      <ul className="bg-verylightgray p-3 rounded-4">
        {ingredients && ingredients.map((item, index) => (
          <li key={index}>- {item}</li>
        ))}
        {!ingredients?.length && (<p>No Ingredients.</p>)}
      </ul>
    </>
  )
}

export default TabIngredients

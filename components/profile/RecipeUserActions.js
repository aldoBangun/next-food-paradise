import ButtonAction from '../UI/ButtonAction'
import { HandThumbsUp, Bookmark } from 'react-bootstrap-icons'
import { useState } from 'react'

const RecipeUserActions = ({ show }) => {
  const [saved, setSaved] = useState(false)
  const [liked, setLiked] = useState(false)

  const handleSave = () => {
    setSaved(!saved)
  }

  const handleLike = () => {
    setLiked(!liked)
  }

  return (
    <>
      {show && (
        <div className="d-flex align-items-center gap-1">
          <ButtonAction active={saved} handleClick={handleSave}>
            <Bookmark size={24} />
          </ButtonAction>
          <ButtonAction active={liked} handleClick={handleLike} >
            <HandThumbsUp size={24} />
          </ButtonAction>
        </div>
      )}
    </>
  )
}

export default RecipeUserActions

import { Button } from 'react-bootstrap'
import style from '@/styles/UI.module.css'

const ButtonAction = ({ active = false, handleClick, children }) => {
  return (
    <>
      <Button
        className={`${style.buttonAction} ${
          active
            ? 'bg-primary text-white'
            : 'text-primary bg-white border border-primary'
        }`}
        onClick={handleClick}
      >
        {children}
      </Button>
    </>
  )
}

export default ButtonAction

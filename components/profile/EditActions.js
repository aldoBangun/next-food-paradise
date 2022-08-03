import { Button, ButtonGroup } from 'react-bootstrap'

const EditActions = ({ show }) => {
  return (
    <>
      <div className="d-grid gap-4">
        <ButtonGroup vertical className="rounded-4 overflow-hidden">
          <Button className="btn-verylightgray p-2">Photo Library</Button>
          <Button className="btn-verylightgray p-2">Take Photo</Button>
        </ButtonGroup>
        <Button className="btn-verylightgray p-2 rounded-4">Cancel</Button>
      </div>
    </>
  )
}

export default EditActions

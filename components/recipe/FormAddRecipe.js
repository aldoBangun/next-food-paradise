import { useEffect, useState } from 'react'
import { Form, Button, InputGroup } from 'react-bootstrap'
import { Book, Image as ImageIcon, Tags, Cup, Building, CodeSlash } from 'react-bootstrap-icons'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import style from '@/styles/FormRecipe.module.css'
import { useSelector, useDispatch } from 'react-redux'
import InputError from '../UI/InputError'
import { createRecipe, resetCreated } from 'features/slices/recipes'

const FormAddRecipe = () => {
  const dispatch = useDispatch()
  const currentUserState = useSelector(state => state.currentUser)
  const { user } = currentUserState
  const recipesState = useSelector(state => state.recipes)
  const { loading, created: isCreatedRecipe } = recipesState
  const [imageFile, setImageFile] = useState('')
  const [imageError, setImageError] = useState('')

  const RecipeSchema = Yup.object().shape({
    title: Yup.string().required('title is required'),
    ingredients: Yup.string().required('Ingredients required'),
    photo: Yup.string().required('Recipe image required'),
    category: Yup.string(),
    variant: Yup.string(),
    restaurant: Yup.string()
  })

  const formik = useFormik({
    initialValues: {
      title: '',
      ingredients: '',
      photo: '',
      category: '',
      variant: '',
      restaurant: ''
    },
    validationSchema: RecipeSchema,
    onSubmit: (values) => {
      const ingredients = values.ingredients.split(',')
      const normalizedIngredients = ingredients.map(item => item.trim())

      const data = {
        user_id: user.user_id,
        ...values,
        photo: imageFile,
        ingredients: normalizedIngredients
      }

      dispatch(createRecipe(data))
    }
  })

  const handleImageUpload = (e) => {
    const ONE_MEGA_BYTE = 1024 * 1024
    const file = e.target.files[0]
    const fieldValue = e.target.value || ''
    const allowedFileType = ['image/jpeg', 'image/jpg', 'image/png']
    
    formik.setFieldValue('photo', fieldValue)
    setImageError('')

    if (!file) {
      setImageFile('')
      return
    }

    const isValidType = allowedFileType.indexOf(file?.type) !== -1
    const isValidSize = file?.size <= ONE_MEGA_BYTE

    if (!isValidType || !isValidSize) {
      setImageFile('')

      if (!isValidType) return setImageError('Only accept *.jpeg, *.jpg, and *.png image format')
      if (!isValidSize) return setImageError('File too large. Image file cannot be more than 1 Mb')
    }

    setImageFile(file)
  }

  useEffect(() => {
    if (isCreatedRecipe) {
      const TIME_OUT = 2000
      formik.resetForm()

      setTimeout(()=>{
        dispatch(resetCreated())
      }, TIME_OUT)
    }
  }, [isCreatedRecipe, dispatch, formik])

  return (
    <Form onSubmit={formik.handleSubmit}>
      <div className="mb-4">
        <Form.Group className={`${style.formGroup} mb-1`} controlId="title">
          <InputGroup>
            <InputGroup.Text className={style.formIcon}>
              <Book />
            </InputGroup.Text>
            <Form.Control
              type="text"
              className={style.formControl} 
              placeholder="title"
              name="title"
              onChange={formik.handleChange}
              value={formik.values.title}
            />
          </InputGroup>
        </Form.Group>
        {formik.errors.title && formik.touched.title && <InputError message={formik.errors.title} />}
      </div>

      <div className="mb-4">
        <Form.Group className={`${style.formGroup} mb-1`} controlId="ingredients">
          <Form.Control
            as="textarea" 
            className={`${style.formControl} ${style.formTextarea}`}
            placeholder="Ingredients"
            name="ingredients"
            onChange={formik.handleChange}
            value={formik.values.ingredients}
          />
        </Form.Group>
        {formik.errors.ingredients && formik.touched.ingredients && <InputError message={formik.errors.ingredients} />}
      </div>

      <div className="position-relative">
        <Form.Group className={style.formFile} controlId="photo">
          <Form.Label className={style.fileLabel}></Form.Label>
          <Form.Control
            className="d-none"
            type="file"
            name="photo"
            onChange={handleImageUpload}
            value={formik.values.photo}
          />
        </Form.Group>

        <Form.Group className={style.formGroup}>
          <InputGroup>
            <InputGroup.Text className={style.formIcon}>
              <ImageIcon />
            </InputGroup.Text>
            <Form.Control
              type="text" 
              className={style.formControl}
              placeholder="Click to add recipe image"
              defaultValue={formik.values.photo ? '1 File selected' : ''}
              disabled
            />
          </InputGroup>
          {imageError && <InputError message={imageError} />}
          {formik.errors.photo && formik.touched.photo && <InputError message={formik.errors.photo} />}
        </Form.Group>
      </div>

      <Form.Group className={style.formGroup} controlId="category">
        <InputGroup>
          <InputGroup.Text className={style.formIcon}>
            <Tags />
          </InputGroup.Text>
          <Form.Control
            type="text"
            className={style.formControl} 
            placeholder="Category"
            name="category"
            onChange={formik.handleChange}
            value={formik.values.category}
          />
        </InputGroup>
      </Form.Group>

      <Form.Group className={style.formGroup} controlId="variant">
        <InputGroup>
          <InputGroup.Text className={style.formIcon}>
            <Cup />
          </InputGroup.Text>
          <Form.Control
            type="text"
            className={style.formControl} 
            placeholder="Variant"
            name="variant"
            onChange={formik.handleChange}
            value={formik.values.variant}
          />
        </InputGroup>
      </Form.Group>

      <Form.Group className={style.formGroup} controlId="building">
        <InputGroup>
          <InputGroup.Text className={style.formIcon}>
            <Building />
          </InputGroup.Text>
          <Form.Control
            type="text"
            className={style.formControl} 
            placeholder="Restaurant"
            name="restaurant"
            onChange={formik.handleChange}
            value={formik.values.restaurant}
          />
        </InputGroup>
      </Form.Group>

      <div className="d-grid w-50 mx-auto">
        <Button className="text-white text-uppercase" type="submit" disabled={loading}>
          {(loading && !isCreatedRecipe) && 'POSTING'}
          {(!loading && isCreatedRecipe) && 'CREATED'}
          {(!loading && !isCreatedRecipe) && 'POST'}
        </Button>
      </div>
    </Form>
  )
}

export default FormAddRecipe
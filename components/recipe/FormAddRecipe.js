import { useState } from 'react'
import { Form, Button, InputGroup } from 'react-bootstrap'
import { Book, Image as ImageIcon, Tags, Cup, Building } from 'react-bootstrap-icons'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import style from '@/styles/FormRecipe.module.css'

const FormAddRecipe = () => {
  const RecipeSchema = Yup.object().shape({
    title: Yup.string()
      .required('title is required'),
    ingredients: Yup.string()
      .required('Ingredients required'),
    photo: Yup.string(),
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
      console.log(values)
    }
  })

  return (
    <Form onSubmit={formik.handleSubmit}>
      <Form.Group className={style.formGroup} controlId="title">
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

      <Form.Group className={style.formGroup} controlId="ingredients">
        <Form.Control
          as="textarea" 
          className={`${style.formControl} ${style.formTextarea}`}
          placeholder="Ingredients"
          name="ingredients"
          onChange={formik.handleChange}
          value={formik.values.ingredients}
        />
      </Form.Group>

      <div className="position-relative">
        <Form.Group className={style.formFile} controlId="photo">
          <Form.Label className={style.fileLabel}></Form.Label>
          <Form.Control
            className="d-none"
            type="file"
            name="photo"
            onChange={formik.handleChange}
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
              defaultValue={formik.values.photo}
              disabled
            />
          </InputGroup>
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

      <div className="d-flex justify-content-center">
        <Button className="text-white"> POST </Button>
      </div>
    </Form>
  )
}

export default FormAddRecipe
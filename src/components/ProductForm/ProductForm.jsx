/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react'
import { CREATE_FORM, UPDATE_FORM } from '../ProductManager/ProductManager'
import Category from '../../services/Category'
import Product from '../../services/Product'

import './ProductForm.scss'

function ProductForm ({
  mode,
  product,
  setProduct,
  setFormMode,
  onSaveData
}) {
  const [categories, setCategories] = useState([])
  const [isSaving, setIsSaving] = useState(false)
  const isEditing = mode === UPDATE_FORM

  const handleChange = (event) => {
    const { name, value } = event.target
    setProduct({
      ...product,
      [name]: value
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    setIsSaving(true)
    if (isEditing) { // Actualizando un producto ya existente
      await Product.updateProduct(product)
      setFormMode(CREATE_FORM)
    } else { // Agregando  un producto nuevo
      await Product.createProduct(product)
    }

    onSaveData()
    resetProduct()
    setIsSaving(false)
  }

  const handleOnCancel = () => {
    resetProduct()
    setFormMode(undefined)
  }

  const resetProduct = () => {
    setProduct(undefined)
  }

  useEffect(() => {
    Category.getCategories().then((data) => {
      setCategories(data)
    })
  }, [])

  return (
    <section className='product-form'>

      <form onSubmit={handleSubmit}>
        <div className="product-form__header">
          <h2>{ isEditing ? 'Edit Product' : 'Add Product'}</h2>
        </div>

        <div className="product-form__body">

          <label htmlFor="name">PRODUCT NAME</label>
          <input type="text" name="name" id="name" value={product?.name || ''} onChange={handleChange} placeholder='your product name' required maxLength="50" />
          <label htmlFor="color">COLOR</label>
          <input type="text" name="color" id="color" value={product?.color || ''} onChange={handleChange} placeholder='silver, black, white, etc.' required maxLength="30" />
          <label htmlFor="category">CATEGORY</label>
          {/** Esto debería ser un select con options en lugar de un input */}
          {/* <input type="text" name="category" id="category" value={product.category} onChange={handleChange} /> */}
          <select name="category" id="category" onChange={handleChange} value={product?.category || ''} required>
            <option value=""> - - - </option>
            {categories.map((category) => (
              <option key={category.id} value={category.name}>
                {category.name}
              </option>
            ))}
          </select>
          <label htmlFor="price">PRICE</label>
          <input type="number" name="price" id="price" placeholder='$1999,99' value={product?.price || ''} onChange={handleChange} required />

          <div className="product-form__action-section">
              <button 
                className={`product-form__button--cancel ${isEditing ? '' : 'hide'}`}
                type='button'
                onClick={handleOnCancel}
                disabled={isSaving}
              >
                Cancel
              </button>
              <button
                className={`product-form__button--update ${isEditing ? '' : 'hide'}`}
                type='submit'
                disabled={isSaving}
              >
                Update
              </button>
              <button
                className={`product-form__button--add ${isEditing ? 'hide' : ''}`}
                type='submit'
                disabled={isSaving}
              >
                Add
                </button>
          </div>

        </div>

      </form>

    </section>
  )
}

export default ProductForm

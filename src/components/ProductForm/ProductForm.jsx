import React from 'react'
import './ProductForm.scss'

function ProductForm({ isEditing, product, setProduct }) {

  const handleChange = (event) => {
    const { name, value } = event.target;
    setProduct({...product, [name]: value});
  }
  
  return (
    <section className='product-form'>

      <form action={'handlesubmit'}>
        <div className="product-form__header">
          <h2>{ isEditing ? 'Edit Product' : 'Add Product'}</h2>
        </div>

        <div className="product-form__body">

          <label htmlFor="productName">PRODUCT NAME</label>
          <input type="text" name="productName" id="productName" value={product.productName} onChange={handleChange} />
          <label htmlFor="productColor">COLOR</label>
          <input type="text" name="productColor" id="productColor" value={product.productColor} onChange={handleChange} />
          <label htmlFor="productCategory">CATEGORY</label>
          <input type="text" name="productCategory" id="productCategory" value={product.productCategory} onChange={handleChange} />
          <label htmlFor="">PRICE</label>
          <input type="number" name="productPrice" id="productPrice" value={product.productPrice} onChange={handleChange} />

        </div>

        <div className="product-form__action">

          <div className={`product-form__action--edit ${isEditing ? '' : 'hide'}`}>
            <button type='submit'>Cancel</button>
            <button type='submit'>Update</button>
          </div>
          <div className={`product-form__action--add ${isEditing ? 'hide' : ''}`}>
            <button type='submit'>Add</button>
          </div>

        </div>
      </form>

    </section>
  )
}

export default ProductForm

import React from 'react'
import './ProductForm.scss'

function ProductForm({
  setIsEditing,
  isEditing, 
  product, 
  setProduct, 
  setProducts, 
  products 
}) {
  const handleChange = (event) => {
    const { name, value } = event.target;
    setProduct({...product, [name]: value});
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    
    if (isEditing) {
      const productsUpdated = products.map( item => item.id === product.id ? item = product : item );
      setProducts(productsUpdated);
      setIsEditing(false);
      resetProduct();
    } else {
      const arrLength = products.length;
      const newProductId = (products[arrLength - 1].id + 1 );
      const newProduct = {
        ...product,
        id: newProductId
      };
      setProducts([...products, newProduct]);
      resetProduct();
    }
  }

  const handleOnCancel = () => {
    resetProduct();
  }

  const resetProduct = () => {
    setProduct({
      id: '',
      name: '',
      color: '',
      category: '',
      price: ''
    });
  }

  return (
    <section className='product-form'>

      <form onSubmit={handleSubmit}>
        <div className="product-form__header">
          <h2>{ isEditing ? 'Edit Product' : 'Add Product'}</h2>
        </div>

        <div className="product-form__body">

          <label htmlFor="name">PRODUCT NAME</label>
          <input type="text" name="name" id="name" value={product.name} onChange={handleChange} />
          <label htmlFor="color">COLOR</label>
          <input type="text" name="color" id="color" value={product.color} onChange={handleChange} />
          <label htmlFor="category">CATEGORY</label>
          <input type="text" name="category" id="category" value={product.category} onChange={handleChange} />
          <label htmlFor="price">PRICE</label>
          <input type="number" name="price" id="price" value={product.price} onChange={handleChange} />

        </div>

        <div className="product-form__action-section">

            <button type='button' onClick={handleOnCancel} >Cancel</button>
            <button className={`product-form__button--cancel ${isEditing ? '' : 'hide'}`} type='submit'>Update</button>
            <button className={`product-form__button--cancel ${isEditing ? 'hide' : ''}`} type='submit'>Add</button>

        </div>
      </form>

    </section>
  )
}

export default ProductForm

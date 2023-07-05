import React, { useEffect, useState } from 'react'
import ProductsList from '../ProductsList/ProductsList'
import ProductForm from '../ProductForm/ProductForm'
import Product from '../../services/Product'
import './ProductManager.scss'

export const CREATE_FORM = 'CREATE'
export const UPDATE_FORM = 'UPDATE'

function ProductManager () {
  const [products, setProducts] = useState([])
  const [formMode, setFormMode] = useState(CREATE_FORM)
  /* form states */
  const [isEditing, setIsEditing] = useState(false);
  const [formProduct, setFormProduct] = useState({
    productID: '',
    productName: '',
    productColor: '',
    productCategory: '',
    productPrice: ''
  })

/*   useEffect(() => {
    Product.getProducts().then((data) => {
      setProducts(data)
    })
  }, []) */

  return (
    <section className='product-manager'>
      <ProductsList products={products} />
      <ProductForm isEditing={isEditing} product={formProduct} setProduct={setFormProduct} />
    </section>
  )
}

export default ProductManager

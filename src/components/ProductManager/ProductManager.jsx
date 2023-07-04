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
  const [selectedProduct, setSelectedProduct] = useState(undefined)

  useEffect(() => {
    Product.getProducts().then((data) => {
      setProducts(data)
    })
  }, [])

  return (
    <section className='product-manager'>
      <ProductsList products={products} />
      <ProductForm mode={formMode} product={selectedProduct} />
    </section>
  )
}

export default ProductManager

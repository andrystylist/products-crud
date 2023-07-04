import React, { useEffect, useState } from 'react'
import ProductsList from '../ProductsList/ProductsList'
import ProductForm from '../ProductForm/ProductForm'
import Product from '../../services/Product'
import './ProductManager.scss'

function ProductManager () {
  const [products, setProducts] = useState([])

  useEffect(() => {
    Product.getProducts().then((data) => {
      setProducts(data)
    })
  }, [])

  return (
    <section className='product-manager'>
      <ProductsList />
      <ProductForm />
    </section>
  )
}

export default ProductManager

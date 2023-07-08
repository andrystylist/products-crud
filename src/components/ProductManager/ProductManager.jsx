import React, { useEffect, useState } from 'react'
import ProductsList from '../ProductsList/ProductsList'
import ProductForm from '../ProductForm/ProductForm'
import Product from '../../services/Product'
import './ProductManager.scss'

export const CREATE_FORM = 'CREATE'
export const UPDATE_FORM = 'UPDATE'

function ProductManager () {
  const [products, setProducts] = useState([])
  const [formMode, setFormMode] = useState()
  const [selectedProduct, setSelectedProduct] = useState()
  const [isLoading, setLoading] = useState(true)

  const fetchData = async () => {
    setLoading(true)
    const data = await Product.getProducts()
    setProducts(data)
    setLoading(false)
  }

  const handleListAction = (newSetFormMode, newSelectedProduct) => {
    setFormMode(newSetFormMode)
    setSelectedProduct(newSelectedProduct)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <section className='product-manager'>
      <ProductsList
        isLoading={isLoading}
        products={products}
        onListAction={handleListAction}
        onDeleteProduct={fetchData}
      />
      {formMode && (
        <ProductForm
          mode={formMode}
          product={selectedProduct}
          setProduct={setSelectedProduct}
          setFormMode={setFormMode}
          onSaveData={fetchData}
        />
      )}
    </section>
  )
}

export default ProductManager

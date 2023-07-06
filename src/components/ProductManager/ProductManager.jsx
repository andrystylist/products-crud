import React, { useEffect, useState } from 'react'
import ProductsList from '../ProductsList/ProductsList'
import ProductForm from '../ProductForm/ProductForm'
import Product from '../../services/Product'
import './ProductManager.scss'

export const CREATE_FORM = 'CREATE'
export const UPDATE_FORM = 'UPDATE'

let data = [
    {
      "id": 1,
      "name": "Recycled Steel Sausages",
      "color": "White",
      "category": "Music",
      "price": 386
    },
    {
      "id": 2,
      "name": "Fantastic Frozen Shirt",
      "color": "Pink",
      "category": "Clothing",
      "price": 20
    }
];

function ProductManager () {
  const [products, setProducts] = useState(data)
  const [formMode, setFormMode] = useState(CREATE_FORM)
  /* form states */
  const [isEditing, setIsEditing] = useState(false);
  const [formProduct, setFormProduct] = useState({
    id: 2,
    name: "Fantastic Frozen Shirt",
    color: "Pink",
    category: "Clothing",
    price: 20
  })

/*   useEffect(() => {
    Product.getProducts().then((data) => {
      setProducts(data)
    })
  }, []) */

  return (
    <section className='product-manager'>
      <ProductsList products={products} />
      <ProductForm
        isEditing={isEditing}
        setIsEditing={setIsEditing}
        product={formProduct}
        setProduct={setFormProduct}
        products={products}
        setProducts={setProducts}
      />
    </section>
  )
}

export default ProductManager

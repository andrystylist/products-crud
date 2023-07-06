import React from 'react'
import { CREATE_FORM, UPDATE_FORM } from '../ProductManager/ProductManager'
import './ProductsList.scss'
import Product from '../../services/Product'

function ProductsList ({ isLoading, products, onListAction, onDeleteProduct }) {
  const handleAddClick = () => {
    onListAction(CREATE_FORM, undefined)
  }
  const handleEditClick = (product) => {
    onListAction(UPDATE_FORM, product)
  }
  const handleDeleteClick = (product) => {
    const isConfirmedDelete = confirm(`Desea eliminar el producto ${product.name}?`)

    if (!isConfirmedDelete) {
      return -1
    }

    Product.deleteProduct(product.id).then(() => {
      onDeleteProduct()
      alert(`El producto ${product.name} fue eliminado exitosamente`)
    })
  }

  return (
    <section className="products-list">
      <header className="products-list__header">
        <h2 className="products-list__title">
          Product List
        </h2>
        <button
          type="button"
          className="products-list__button products-list__button--add"
          onClick={handleAddClick}
        >
          Add
        </button>
      </header>
      <article className='products-list__table-container'>
        { isLoading && (
          <div>Loading...</div>
        )}
        {!isLoading && (
            <table className="products-list__table">
              <thead className="products-list__thead">
                <tr className="products-list__tr">
                  <th className="products-list__th">Product Name</th>
                  <th className="products-list__th">Color</th>
                  <th className="products-list__th">Category</th>
                  <th className="products-list__th">Price</th>
                  <th className="products-list__th"></th>
                </tr>
              </thead>
              <tbody className="products-list__tbody">
                {products.length === 0 && (
                  <tr>
                    <td colSpan="5" className="products-list__td products-list__td--empty">
                      No Products
                    </td>
                  </tr>
                )}
                {products.map((product) => (
                  <tr key={product.id}>
                    <td className="products-list__td products-list__td--bold">
                      {product.name}
                    </td>
                    <td className="products-list__td">
                    {product.color}
                    </td>
                    <td className="products-list__td">
                    {product.category}
                    </td>
                    <td className="products-list__td">
                    ${product.price.toFixed(2)}
                    </td>
                    <td className="products-list__td  products-list__td--actions">
                      <button
                        type="button"
                        className="products-list__button products-list__button--action"
                        onClick={() => handleEditClick(product)}
                      >
                        Edit
                      </button>
                      |
                      <button
                        type="button"
                        className="products-list__button products-list__button--action"
                        onClick={() => handleDeleteClick(product)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
          </table>
        )}
      </article>
    </section>
  )
}

export default ProductsList

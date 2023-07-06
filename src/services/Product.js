export default class Product {
  static host = 'http://localhost:3000'

  static async getProducts () {
    const response = await fetch(`${Product.host}/products`)
    const jsonResponse = await response.json()

    return Array.isArray(jsonResponse) ? jsonResponse : []
  }

  static createProduct (product) {
    return fetch(`${Product.host}/products`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(product)
    }).then((response) => {
      return response.json()
    })
  }

  static updateProduct (product) {
    return fetch(`${Product.host}/products/${product.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(product)
    }).then((response) => {
      return response.json()
    })
  }

  static deleteProduct (id) {
    return fetch(`${Product.host}/products/${id}`, {
      method: 'DELETE'
    }).then((response) => {
      return response.json()
    })
  }
}

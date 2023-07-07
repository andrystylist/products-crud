import host from './host'
export default class Product {
  static async getProducts () {
    const response = await fetch(`${host}/products`)
    const jsonResponse = await response.json()

    return Array.isArray(jsonResponse.data) ? jsonResponse.data : []
  }

  static createProduct (product) {
    return fetch(`${host}/product`, {
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
    return fetch(`${host}/product/${product.id}`, {
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
    return fetch(`${host}/product/${id}`, {
      method: 'DELETE'
    }).then((response) => {
      return response.json()
    })
  }
}

export default class Category {
  static host = 'http://localhost:3000'

  static async getCategories () {
    const response = await fetch(`${Category.host}/categories`)
    const jsonResponse = await response.json()

    return Array.isArray(jsonResponse) ? jsonResponse : []
  }
}

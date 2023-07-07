import host from './host'
export default class Category {
  static async getCategories () {
    const response = await fetch(`${host}/categories`)
    const jsonResponse = await response.json()

    return Array.isArray(jsonResponse) ? jsonResponse : []
  }
}

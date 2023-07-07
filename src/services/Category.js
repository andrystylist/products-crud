export default class Category {
  static async getCategories () {
    const categories = [
      {
        id: 1,
        name: 'Music'
      },
      {
        id: 2,
        name: 'Clothing'
      },
      {
        id: 3,
        name: 'Home'
      },
      {
        id: 4,
        name: 'Baby'
      },
      {
        id: 5,
        name: 'Books'
      }
    ]
    return categories
  }
}

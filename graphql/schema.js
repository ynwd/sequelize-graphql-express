const { buildSchema } = require('graphql')
module.exports = buildSchema(`
type Brand {
  id: Int!
  name: String!
  logo: String
  banner: String
  outlets: [Outlet]
  products: [Product]
}

type Outlet {
  name: String!
  picture: String
  address: String
  longitude: Float
  latitude: Float
  id: Int!
}

type Product {
  name: String
  picture: String
  price: Int
  id: Int!
}

type RootQuery {
  now: String
  
  brand: [Brand]
  brandInfo(brandId: Int!): Brand

  outlet: [Outlet]
  outletInfo(outletId: Int!): Outlet

  product: [Product]
  productInfo(productId: Int!): Product
}

type RootMutation {
  """
  Create brand
  """
  brandCreate(name: String!, logo: String, banner: String): Brand
  """
  Update brand. Success return 1. Fail return 0.
  """
  brandUpdate(brandId: Int, name: String!, logo: String, banner: String): Int
  """
  Delete brand. Success return 1. Fail return 0.
  """
  brandDelete(brandId: Int!): Int

  
  """
  Create outlet
  """
  outletCreate(name: String!, picture: String, address: String, longitude: Float, latitude: Float, brandId: Int!): Outlet
  """
  Update outlet. Success return 1. Fail return 0.
  """
  outletUpdate(outletId: Int, name: String!, picture: String, address: String, longitude: Float, latitude: Float, brandId: Int!): Int
  """
  Delete outlet. Success return 1. Fail return 0.
  """
  outletDelete(outletId: Int!): Int
  
  
  """
  Create product
  """
  productCreate(name: String!, picture: String, price: Int!, brandId: Int!): Product
  """
  Update product. Success return 1. Fail return 0.
  """
  productUpdate(productId: Int!, name: String!, picture: String, price: Int!, brandId: Int): Int
  """
  Delete product. Success return 1. Fail return 0.
  """
  productDelete(productId: Int!): Int
}

schema {
  query: RootQuery
  mutation: RootMutation
}
`)

const { Product } = require('../db/models')

const product = {}

product.create = async (product) => {
  try {
    return await Product.create(product)
  } catch (error) {
    return error
  }
}

product.update = async (id, product) => {
  try {
    return await Product.update(
      product,
      { where: { id } }
    )
  } catch (error) {
    return error
  }
}

product.delete = async (id) => {
  try {
    return await Product.destroy({ where: { id } })
  } catch (error) {
    return error
  }
}

product.getAll = async () => {
  return await Product.findAll()
}

product.getById = async (id) => {
  return await Product.findOne({
    where: { id }
  })
}

module.exports = product

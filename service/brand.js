const { Brand, Outlet, Product } = require('../db/models')

const brand = {}

brand.create = async (brand) => {
  try {
    return await Brand.create(brand)
  } catch (error) {
    return error
  }
}

brand.update = async (id, brand) => {
  try {
    return await Brand.update(
      brand,
      { where: { id } }
    )
  } catch (error) {
    return error
  }
}

brand.delete = async (id) => {
  try {
    return await Brand.destroy({ where: { id } })
  } catch (error) {
    return error
  }
}

brand.getAll = async () => {
  try {
    return await Brand.findAll({
      include: [{
        model: Outlet,
        as: 'outlets'
      }, {
        model: Product,
        as: 'products'
      }]
    })
  } catch (error) {
    return error
  }
}

brand.getById = async (id) => {
  try {
    return await Brand.findOne({
      include: [{
        model: Outlet,
        as: 'outlets'
      }, {
        model: Product,
        as: 'products'
      }],
      where: { id }
    })
  } catch (error) {
    return error
  }
}

module.exports = brand

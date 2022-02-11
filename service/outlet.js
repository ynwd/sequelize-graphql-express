const { Outlet } = require('../db/models')

const outlet = {}

outlet.create = async (outlet) => {
  try {
    return await Outlet.create(outlet)
  } catch (error) {
    return error
  }
}

outlet.update = async (id, outlet) => {
  try {
    return await Outlet.update(
      outlet,
      { where: { id } }
    )
  } catch (error) {
    return error
  }
}

outlet.delete = async (id) => {
  try {
    return await Outlet.destroy({ where: { id } })
  } catch (error) {
    return error
  }
}

outlet.getAll = async () => {
  try {
    return await Outlet.findAll()
  } catch (error) {
    return error
  }
}

outlet.getById = async (id) => {
  try {
    return await Outlet.findOne({
      where: { id }
    })
  } catch (error) {
    return error
  }
}

module.exports = outlet

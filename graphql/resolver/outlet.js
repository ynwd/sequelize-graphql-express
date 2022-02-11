const srvOutlet = require('../../service/outlet')

module.exports = {
  outlet: async () => {
    return await srvOutlet.getAll()
  },
  outletInfo: async ({ outletId }) => {
    return await srvOutlet.getById(outletId)
  },
  outletCreate: async ({ name, picture, address, longitude, latitude, brandId }) => {
    const outlet = { name, picture, address, longitude, latitude, brand_id: brandId }
    return await srvOutlet.create(outlet)
  },
  outletUpdate: async ({ outletId, name, picture, address, longitude, latitude, brandId }) => {
    const outlet = { name, picture, address, longitude, latitude, brand_id: brandId }
    return await srvOutlet.update(outletId, outlet)
  },
  outletDelete: async ({ outletId }) => {
    return await srvOutlet.delete(outletId)
  }
}

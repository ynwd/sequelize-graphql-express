const srvBrand = require('../../service/brand')

module.exports = {
  brand: async () => {
    return await srvBrand.getAll()
  },
  brandInfo: async ({ brandId }) => {
    return await srvBrand.getById(brandId)
  },
  brandCreate: async ({ name, logo, banner }) => {
    const brand = { name, logo, banner }
    return await srvBrand.create(brand)
  },
  brandUpdate: async ({ brandId, name, logo, banner }) => {
    const brand = { name, logo, banner }
    const [res] = await srvBrand.update(brandId, brand)
    return res
  },
  brandDelete: async ({ brandId }) => {
    return await srvBrand.delete(brandId)
  }
}

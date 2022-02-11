const srvProduct = require('../../service/product')

module.exports = {
  product: async () => {
    const res = await srvProduct.getAll()
    return res
  },
  productInfo: async ({ productId }) => {
    return await srvProduct.getById(productId)
  },
  productCreate: async ({ name, picture, price, brandId }) => {
    const product = { name, picture, price, brand_id: brandId }
    return await srvProduct.create(product)
  },
  productUpdate: async ({ productId, name, picture, price, brandId }) => {
    const product = { name, picture, price, brand_id: brandId }
    const [res] = await srvProduct.update(productId, product)
    console.log(res)
    return res
  },
  productDelete: async ({ productId }) => {
    return await srvProduct.delete(productId)
  }
}

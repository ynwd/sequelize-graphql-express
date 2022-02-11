const srvBrand = require('../service/brand')
const srvOutlet = require('../service/brand')
const srvProduct = require('../service/brand')

async function execute () {
  const brand = await srvBrand.getAll()
  const product = await srvProduct.getAll()
  const outlet = await srvOutlet.getAll()

  console.log(JSON.stringify(brand))
  console.log(JSON.stringify(product))
  console.log(JSON.stringify(outlet))
}

(async () => {
  await execute()
})()

const { Brand, Product, sequelize } = require('../db/models')
const srv = require('./product')
const srvBrand = require('./brand')

beforeAll(async () => {
  await Product.sync({ force: true })
  await Brand.sync({ force: true })
  await srvBrand.create({ name: 'aqua' })
})

afterAll(async () => {
  await sequelize.close()
})

describe('create product', () => {
  test('create -- success', async () => {
    const product = { name: 'jakarta', brand_id: 1 }
    const res = await srv.create(product)
    expect(res.name).toBe(product.name)
  })
})

describe('get all product', () => {
  test('get all -- success', async () => {
    const [res] = await srv.getAll()
    expect(res.name).toBe('jakarta')
  })
})

describe('get product by id', () => {
  test('get product by id -- success', async () => {
    const res = await srv.getById(1)
    expect(res.name).toBe('jakarta')
  })
  test('get product by id -- fail', async () => {
    const res = await srv.getById(2)
    expect(res).toBe(null)
  })
})

describe('update product', () => {
  test('update product by id -- success', async () => {
    const product = { name: 'bandung' }
    const [res] = await srv.update(1, product)
    expect(res).toBe(1)
  })

  test('update product by id -- fail', async () => {
    const product = { name: 'bandung' }
    const [res] = await srv.update(2, product)
    expect(res).toBe(0)
  })
})

describe('delete product by id', () => {
  test('delete product by id -- success', async () => {
    const res = await srv.delete(1)
    expect(res).toBe(1)
  })
  test('delete product by id -- fail', async () => {
    const res = await srv.delete(2)
    expect(res).toBe(0)
  })
})

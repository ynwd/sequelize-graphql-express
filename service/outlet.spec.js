const { Brand, Outlet, sequelize } = require('../db/models')
const srv = require('./outlet')
const srvBrand = require('./brand')

beforeAll(async () => {
  await Outlet.sync({ force: true })
  await Brand.sync({ force: true })
  await srvBrand.create({ name: 'aqua' })
})

afterAll(async () => {
  await sequelize.close()
})

describe('create outlet', () => {
  test('create -- success', async () => {
    const outlet = { name: 'jakarta', brand_id: 1 }
    const res = await srv.create(outlet)
    expect(res.name).toBe(outlet.name)
  })
})

describe('get all outlet', () => {
  test('get all -- success', async () => {
    const [res] = await srv.getAll()
    expect(res.name).toBe('jakarta')
  })
})

describe('get outlet by id', () => {
  test('get outlet by id -- success', async () => {
    const res = await srv.getById(1)
    expect(res.name).toBe('jakarta')
  })
  test('get outlet by id -- fail', async () => {
    const res = await srv.getById(2)
    expect(res).toBe(null)
  })
})

describe('update outlet', () => {
  test('update outlet by id -- success', async () => {
    const outlet = { name: 'bandung' }
    const [res] = await srv.update(1, outlet)
    expect(res).toBe(1)
  })

  test('update outlet by id -- fail', async () => {
    const outlet = { name: 'bandung' }
    const [res] = await srv.update(2, outlet)
    expect(res).toBe(0)
  })
})

describe('delete outlet by id', () => {
  test('delete outlet by id -- success', async () => {
    const res = await srv.delete(1)
    expect(res).toBe(1)
  })
  test('delete outlet by id -- fail', async () => {
    const res = await srv.delete(2)
    expect(res).toBe(0)
  })
})

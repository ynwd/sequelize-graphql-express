const { sequelize, Brand } = require('../db/models')
const srv = require('./brand')

beforeAll(async () => {
  await Brand.sync({ force: true })
})

afterAll(async () => {
  await sequelize.close()
})

describe('create brand', () => {
  test('create -- success', async () => {
    const brand = { name: 'brand' }
    const res = await srv.create(brand)
    expect(res.name).toBe(brand.name)
  })
})

describe('get all brand', () => {
  test('get all -- success', async () => {
    const [res] = await srv.getAll()
    expect(res.name).toBe('brand')
  })
})

describe('get brand by id', () => {
  test('get brand by id -- success', async () => {
    const res = await srv.getById(1)
    expect(res.name).toBe('brand')
  })
  test('get brand by id -- fail', async () => {
    const res = await srv.getById(2)
    expect(res).toBe(null)
  })
})

describe('update brand', () => {
  test('update brand by id -- success', async () => {
    const brand = { name: 'cap' }
    const [res] = await srv.update(1, brand)
    expect(res).toBe(1)
  })

  test('update brand by id -- fail', async () => {
    const brand = { name: 'cap' }
    const [res] = await srv.update(2, brand)
    expect(res).toBe(0)
  })
})

describe('delete brand by id', () => {
  test('delete brand by id -- success', async () => {
    const res = await srv.delete(1)
    expect(res).toBe(1)
  })
  test('delete brand by id -- fail', async () => {
    const res = await srv.delete(2)
    expect(res).toBe(0)
  })
})

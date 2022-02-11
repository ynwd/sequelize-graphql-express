const product = require('./product')
const outlet = require('./outlet')
const brand = require('./brand')

const resolver = {
  now: async () => {
    const res = new Date().toString()
    return res
  },
  ...brand,
  ...product,
  ...outlet
}

module.exports = resolver

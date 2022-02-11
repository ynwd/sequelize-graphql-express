'use strict'

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Outlets', [
      {
        name: 'Outlet Bekasi',
        picture: 'bekasi.png',
        brand_id: 1,
        address: 'kotamadya bekasi',
        longitude: -6.2849728,
        latitude: 106.9000864,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Outlet Depok',
        picture: 'depok.png',
        brand_id: 2,
        address: 'kotamadya depok',
        longitude: -6.3627638,
        latitude: 106.8248542,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Outlet Bogor',
        picture: 'bogor.png',
        brand_id: 3,
        address: 'kotamadya bogor',
        longitude: -6.5452856,
        latitude: 106.5332119,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Outlet Cibinong',
        picture: 'cibinong.png',
        brand_id: 4,
        address: 'kecamatan cibinong',
        longitude: -6.4824523,
        latitude: 106.8015999,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Outlet Tangerang',
        picture: 'tng.png',
        brand_id: 5,
        address: 'kotamadya tangerang',
        longitude: -6.1766829,
        latitude: 106.5798215,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Outlet Serpong',
        picture: 'srp.png',
        brand_id: 6,
        address: 'kecamatan serpong',
        longitude: -6.3139273,
        latitude: 106.6475996,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {})
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Outlets', null, {})
  }
}

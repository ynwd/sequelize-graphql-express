'use strict'

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Products', [
      {
        name: 'Aqua',
        brand_id: 1,
        picture: 'aqua.png',
        price: '3500',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Le Minerale',
        brand_id: 2,
        picture: 'minerale.png',
        price: '3400',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Vit',
        brand_id: 3,
        picture: 'vit.png',
        price: '3300',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Ades',
        brand_id: 4,
        picture: 'ades.png',
        price: '3200',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Club',
        brand_id: 5,
        picture: 'club.png',
        price: '3100',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Mountoya',
        brand_id: 6,
        picture: 'mountoya.png',
        price: '3000',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {})
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Products', null, {})
  }
}

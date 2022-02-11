'use strict'

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Brands', [
      {
        name: 'PT Aqua Golden Mississippi',
        logo: 'aqua_logo.png',
        banner: 'aqua_banner.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'PT Tirta Fresindo Jaya',
        logo: 'lemineral_logo.png',
        banner: 'lemineral_banner.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'PT Tirta Investama',
        logo: 'vit_logo.png',
        banner: 'vit_banner.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'PT Coca-Cola Amatil Indonesia',
        logo: 'ades_logo.png',
        banner: 'ades_banner.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'PT Tirta Sukses Perkasa',
        logo: 'club_logo.png',
        banner: 'club_banner.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'PT Toyamilindo',
        logo: 'mountoya_logo.png',
        banner: 'mountoya_banner.png',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {})
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Brands', null, {})
  }
}

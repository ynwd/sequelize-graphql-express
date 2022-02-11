'use strict'
const {
  Model
} = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Brand extends Model {
    static associate (models) {
      this.hasMany(models.Outlet, {
        foreignKey: {
          name: 'brand_id',
          allowNull: false
        },
        as: 'outlets'
      })
      this.hasMany(models.Product, {
        foreignKey: {
          name: 'brand_id',
          allowNull: false
        },
        as: 'products'
      })
    }
  }
  Brand.init({
    name: DataTypes.STRING,
    logo: DataTypes.STRING,
    banner: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Brand'
  })
  return Brand
}

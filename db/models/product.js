'use strict'
const {
  Model
} = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    static associate (models) {
      this.belongsTo(models.Brand, {
        foreignKey: {
          name: 'brand_id',
          allowNull: false
        },
        as: 'outlets'
      })
    }
  }
  Product.init({
    name: DataTypes.STRING,
    picture: DataTypes.STRING,
    price: DataTypes.INTEGER,
    brand_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Product'
  })
  return Product
}

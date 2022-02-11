'use strict'
const {
  Model
} = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Outlet extends Model {
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
  Outlet.init({
    name: DataTypes.STRING,
    picture: DataTypes.STRING,
    address: DataTypes.STRING,
    longitude: DataTypes.FLOAT,
    latitude: DataTypes.FLOAT,
    brand_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Outlet'
  })
  return Outlet
}

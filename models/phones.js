/* jshint indent: 2 */
/* eslint-disable */
// sequelize-auto -o "./models" -d phonesdb -h localhost -u root -p 3306 -x gotinsum -e mysql

const sequelize = require('sequelize');

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('phones', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    brand: {
      type: DataTypes.CHAR(50),
      allowNull: false,
    },
    model: {
      type: DataTypes.CHAR(50),
      allowNull: false,
    },
    cpu: {
      type: DataTypes.CHAR(50),
      allowNull: false,
    },
    display: {
      type: DataTypes.CHAR(50),
      allowNull: false,
    },
    internal_memory: {
      type: DataTypes.CHAR(50),
      allowNull: false,
    },
    os: {
      type: DataTypes.CHAR(50),
      allowNull: false,
    },
    front_camera: {
      type: DataTypes.CHAR(50),
      allowNull: false,
    },
    ram: {
      type: DataTypes.CHAR(50),
      allowNull: false,
    },
    battery_type: {
      type: DataTypes.CHAR(50),
      allowNull: false,
    },
  }, {
    tableName: 'phones',
  });
};

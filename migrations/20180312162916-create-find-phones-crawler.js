'use strict';
/* eslint-disable */
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('FindPhonesCrawlers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      brand: {
        type: Sequelize.STRING
      },
      model: {
        type: Sequelize.STRING
      },
      cpu: {
        type: Sequelize.STRING
      },
      display: {
        type: Sequelize.STRING
      },
      internal_memory: {
        type: Sequelize.STRING
      },
      os: {
        type: Sequelize.STRING
      },
      front_camera: {
        type: Sequelize.STRING
      },
      ram: {
        type: Sequelize.STRING
      },
      battery_type: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('FindPhonesCrawlers');
  }
};
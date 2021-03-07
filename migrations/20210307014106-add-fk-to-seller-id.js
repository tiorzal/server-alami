'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addConstraint('Products', {
      fields: ['SellerId'],
      name: 'add-fk-sellerid',
      type: 'foreign key',
      references: {
        table: "Sellers",
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeConstraint('Products', 'add-fk-sellerid')
  }
};

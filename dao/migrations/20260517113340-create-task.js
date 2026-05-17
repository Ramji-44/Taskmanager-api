'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("tasks", {

      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      taskName: {
        type: Sequelize.STRING(100),
        allowNull: false,
        unique: true
      },
      assigneeName: {
        type: Sequelize.STRING(100),
        allowNull: false
      },
      assigneeEmail: {
        type: Sequelize.STRING(254),
        allowNull: false
      },
      dueDate: {
        type: Sequelize.DATEONLY,
        allowNull: false
      },
      dueTime: {
        type: Sequelize.TIME,
        allowNull: false
      },
      hours: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      url: {
        type: Sequelize.STRING(2048),
        allowNull: false
      },
      description: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      progress: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
      },
      priority: {
        type: Sequelize.ENUM("low", "medium", "high"),
        allowNull: false
      },
      taskType: {
        type: Sequelize.JSON,
        allowNull: false
      },
      statusType: {
        type: Sequelize.ENUM("Pending", "In Progress", "Completed"),
        allowNull: false
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false
      }
    })
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("tasks")
  }
}
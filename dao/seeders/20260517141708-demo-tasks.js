'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert("tasks", [
      {
            taskName: "bring a notebook",
            assigneeName: "ramji",
            assigneeEmail: "ramji@gmail.com",
            dueDate: "2026-05-17",
            dueTime: "19:50:01",
            hours: 20,
            url: "https://github.com/Ramji-44/Taskmanager-api",
            description: "Safety & Compatibility: While the HTTP specification doesn't set a hard limit, most browsers and search engines (like Chrome and Google)",
            progress: 80,
            priority: "high",
            taskType: JSON.stringify(["bug fix", "feature"]),
            statusType: "Pending",
            createdAt : new Date(),
            updatedAt : new Date()
      },
      {
            taskName: " watch the boys series",
            assigneeName: "butcher",
            assigneeEmail: "homelander@gmail.com",
            dueDate: "2026-05-11",
            dueTime: "20:50:01",
            hours: 10,
            url: "https://github.com",
            description: "React is a JavaScript library for rendering user interfaces (UI). UI is built from small units like buttons, text, and images",
            progress: 20,
            priority: "low",
            taskType: JSON.stringify(["bug fix", "feature", "enhancement"]),
            statusType: "Completed",
            createdAt : new Date(),
            updatedAt : new Date()
      }

    ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete("tasks")
  }
};

const { Sequelize, DataTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    const Task = sequelize.define("Task", {

        taskName: {
            type: DataTypes.STRING(100),
            unique: true,
            allowNull: false
        },
        assigneeName: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        assigneeEmail: {
            type: DataTypes.STRING(254),
            allowNull: false
        },
        dueDate: {
            type: DataTypes.DATEONLY,
            allowNull: false
        },
        dueTime: {
            type: DataTypes.TIME,
            allowNull: false
        },
        hours: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        url: {
            type: DataTypes.STRING(2048),
            allowNull: false
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        progress: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0
        },
        priority: {
            type: DataTypes.ENUM("low", "medium", "high"),
            allowNull: false
        },
        taskType: {
            type: DataTypes.JSON,
            allowNull: false
        },
        statusType: {
            type: DataTypes.ENUM("pending", "in progress", "completed"),
            allowNull: false
        }
    },
        {
            tableName: "tasks",
            timestamps: true,
            defaultScope: {
                attributes: { exclude: ["createdAt", "updatedAt"] }
            }
        })
    return Task
}
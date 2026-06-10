const express = require("express")
const router = express.Router()

const { checkSchema } = require("express-validator")
const { getByIdVS, postTaskVS, putTaskVS, deleteTaskVS } = require("../middleware/taskValidationSchema.js")

const taskController = require("../controllers/tasks.js")
const validate = require("../middleware/validation.js")

// task route
router.get('/', taskController.getAllTasks)
router.get('/:id', checkSchema(getByIdVS), validate, taskController.getById)
router.post('/', checkSchema(postTaskVS), validate, taskController.createTask)
router.put('/:id', checkSchema(putTaskVS), validate, taskController.putTask)
router.delete('/:id', checkSchema(deleteTaskVS), validate, taskController.deleteTask)

module.exports = router
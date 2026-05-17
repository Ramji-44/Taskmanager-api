const express = require("express")
const router = express.Router()
const taskController = require("../controllers/tasks.js")

// task route
router.get('/', taskController.getAllTasks)
router.get('/:id', taskController.getById)
router.post('/', taskController.createTask)
router.put('/:id', taskController.putTask)
router.patch('/:id', taskController.patchTask)
router.delete('/:id', taskController.deleteTask)


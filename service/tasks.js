
const taskDao = require("../dao/taskDao")

const listAll = async () => {
    return taskDao.getAll()
}

const findById = async (id) => {
    const task = await taskDao.getById(id)
    if (!task) {
        throw notFound("Task")
    }
    return task
}

const create = async (body) => {
    const exists = await taskDao.findByTaskName(body.taskName)
    if (exists) {
        throw alreadyExists("Task")
    }
    return taskDao.createRow(body)
}


const replace = async (id, body) => {
    const task = await taskDao.getById(id)

    if (!task) {
        throw notFound("Task not found")
    }

    const exists = await taskDao.findByTaskName(body.taskName)
    if (exists && exists.id !== Number(id)) {
        throw alreadyExists("Task")
    }
    return taskDao.replaceRow(id, body)
}

const remove = async (id) => {
    const task = await taskDao.getById(id)
    if (!task) {
        throw notFound("Task")
    }
    return taskDao.deleteRow(id)
}

// error helpers
function required(message) {
    const error = new Error(message)
    error.status = 400
    return error
}

function notFound(value) {
    const error = new Error(value + " not found")
    error.status = 404
    return error
}

function alreadyExists(value) {
    const error = new Error(value + " already exists")
    error.status = 409
    return error
}

module.exports = { listAll, findById, create, replace, remove }
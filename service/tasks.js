
const taskDao = require("../dao/taskDao")

const listAll = async () => {
    return taskDao.getAll()
}

const findById = async (id) => {
    const task = await taskDao.getById(id)
    return task
}

const create = async (body) => {

    const exists = await taskDao.findByTaskName(body.taskName)
    if (exists) {
        throw new Error("Task already exits")
    }
    return taskDao.createRow(body)
}


const replace = async (id, body) => {

    const task = await taskDao.getById(id)
    if(!task){
        throw new Error("Task not found")
    }

    const exists = await taskDao.findByTaskName(body.title)
    if(exists && exists.id !== Number(id)){
        throw new Error("Task already exists")
    }

    return taskDao.replaceRow(id, body)
}


const modify = async(id,body) => {
    const task = await taskDao.getById(id)
    if(!task){
        throw new Error("Task not found")
    }
    const exists = await taskDao.findByTaskName(body.taskName)
    if(exists && exists.id !== Number(id)){
        throw new Error("Task already exists")
    }

    return taskDao.modifyRow(id, body)
}


const remove = async(id) => {
    const task = await taskDao.getById(id)
    if(!task){
        throw new Error("Task not found")
    }
    return taskDao.deleteRow(id)
}

module.exports = { listAll, findById, create, replace, modify, remove }
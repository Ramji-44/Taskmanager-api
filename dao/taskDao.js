const { response } = require("express")
const db = require("./models")

const getAll = async () => {
    return db.Task.findAll()
}

const getById = async (id) => {
    return db.Task.findByPk(id)
}

const findByTaskName = async (taskName) => {   // duplicate task check
    return db.Task.findOne({
        where: { taskName: taskName }
    })
}

const createRow = async (body) => {
    const newTask = await db.Task.create(body)
    const { createdAt, updatedAt, ...response } = newTask.dataValues
    return response
}

const replaceRow = async (id, body) => {
    await db.Task.update({
        taskName: body.taskName ?? null,
        assigneeName: body.assigneeName ?? null,
        assigneeEmail: body.assigneeEmail ?? null,
        dueDate: body.dueDate ?? null,
        dueTime: body.dueTime ?? null,
        hours: body.hours ?? null,
        url: body.url ?? null,
        description: body.description ?? null,
        progress: body.progress ?? null,
        priority: body.priority ?? null,
        taskType: body.taskType ?? null,
        statusType: body.statusType ?? null
    },
        { where: { id } })
    return {
        message: "Task Updated Successfully"
    }
}


const modifyRow = async (id, body) => {
    await db.Task.update(body, { where: { id } })
    return { message: "Task Updated Successfully" }
}


const deleteRow = async (id) => {
    const taskId = await db.Task.findByPk(id)
    return await taskId.destroy()
}

module.exports = { getAll, getById, findByTaskName, createRow, replaceRow, modifyRow, deleteRow }
const db = require("./models")

const getAll = async () => {
    return db.Task.findAll({
        attributes: { exclude: ["createdAt", "updatedAt"] }
    })
}

const getById = async (id) => {
    return db.Task.findByPk(id, { attributes: { exclude: ["created", "updatedAt"] } })
}

const findByTaskName = async (taskName) => {   // duplicate task found
    return db.Task.findOne({
        where: { taskName }
    })
}

const createRow = async (body) => {
    const newTask = await db.Task.create(body)
    return newTask
}

const replaceRow = async (body) => {
    const putUpdate = {
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
    }

    const updateTask = await db.Task.update(putUpdate, { where: { id } })
    return { id, ...putUpdate }
}

const modifyRow = async (body) => {
    const patchUpdate = await db.Task.update(body, { where: { id } })
    return { id, ...patchUpdate }
}

const deleteRow = async (id) => {
    const taskId = await db.Task.findByPk(id)
    return await taskId.destroy()
}

module.exports = { getAll, getById, findByTaskName, createRow, replaceRow, modifyRow, deleteRow }
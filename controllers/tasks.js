const service = require("../service/tasks")

const getAllTasks = async (req, res) => {
    try {
        const data = await service.listAll()
        res.status(200).json(data)
    }
    catch (err) {
        return res.status(500).json({ error: err.message })
    }
}

const getById = async (req, res) => {
    try {
        const data = await service.findById(req.params.id)
        res.status(200).json(data)
    }
    catch (error) {
        return res.status(500).json({ error: err.message })
    }
}

const createTask = async (req, res) => {
    try {
        const data = await service.create(req.body)
        res.status(201).json(data)
    }
    catch (err) {
        return res.status(500).json({ error: err.message })
    }
}

const putTask = async (req, res) => {
    try {
        const data = await service.replace(req.params.id, req.body)
        res.status(200).json(data)
    }
    catch (error) {
        return res.status(500).json({ error: err.message })
    }
}

const patchTask = async (req, res) => {
    try {
        const data = await service.modify(req.params.id, req.body)
        res.status(200).json(data)
    }
    catch (errro) {
        return res.status(500).json({ error: err.message })
    }
}

const deleteTask = async (req, res) => {
    try {
        const data = await service.remove(req.params.id)
        res.status(200).json({ Message: "Task Deleted Successfully" })
    }
    catch (error) {
        return res.status(500).json({ error: err.message })
    }
}

module.exports = { getAllTasks, getById, createTask, putTask, deleteTask }
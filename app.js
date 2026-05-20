const express = require("express")
const cors = require("cors")

const taskRoutes = require("./routes/tasks");
const app = express()

app.use(express.json())
app.use(cors({
    origin : "http://localhost:3000"
}))

app.use('/tasks', taskRoutes)

// route test
app.get("/", (req, res) => {
    res.json({ Message: "Task Manager API is working " })
})

module.exports = app
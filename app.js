const express = require("express")
const app = express()

app.use(express.json())

// route test
app.get("/", (req, res) => {
    res.json({ Message: "Task Manager API is working " })
})

module.exports = app
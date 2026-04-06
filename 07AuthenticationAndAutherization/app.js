const express = require('express')

const app = express()

app.get("/", (req, res) => {
    res.send("welcom to the jungle")
})

app.listen(3000)
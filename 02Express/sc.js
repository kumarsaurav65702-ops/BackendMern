// Express is a framework.
// It's a npm package.
// It manages everything from receiving the request and giving the response.
// To reload without restarting install nodemon {npm i nodemon -g}

const express = require("express")

const app = express()

app.get("/", function(req, res){
    res.send("Hello Saurav! How are you")
})

app.listen(3000)
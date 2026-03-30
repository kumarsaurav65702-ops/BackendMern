// Express is a framework.
// It's a npm package.
// It manages everything from receiving the request and giving the response.
// To reload without restarting install nodemon {npm i nodemon -g}

const express = require("express")

const app = express()

// To make data readable we use middleware (sessions and cookies)--------------------
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Middleware------------------------------------------------------
app.use(function(req, res, next){
    console.log("This is the msg")
    next()
})

app.get("/", function(req, res){
    res.send("Hello Saurav! How are you")
})

//Routing----------------------------------------------------------
app.get("/city", function(req, res){
    res.send("I live in Patna")
})

//Error handling---------------------------------------------------
app.use(function(err, req, res, next){
    console.log(err.stack)
    res.status(500).send
    ("something broke")
})

// To Handle Error--------------------------------------------------
app.get("./profile", function(req, res, next){
    return next(new Error("Not implemented"))
})

app.listen(3000)
const cookieParser = require('cookie-parser')
const express = require('express')
const app = express()
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

app.use(cookieParser())

// How to set and read cookies

// app.get("/", (req, res) => {
//     res.cookie("name", "Hannu")
//     res.send("welcom to the jungle")
//   })


// To encrypt your password-----------------------------------------------

// app.get("/", (req, res) => {
//     bcrypt.genSalt(10, function(err, salt) {
//     bcrypt.hash("Saurav121", salt, function(err, hash) {
//         console.log(hash);

//     });
// });
// })

// To dcrypt your password---------------------------------------------------

// app.get("/", (req, res) => {
//    bcrypt.compare("Saurav121", "$2b$10$KW2eF52xDQWYKVoHh9j.7eQAgypco6ZDaPj8OqpHfnR3U8yPmlGy2", function(err, result) {
//     console.log(result)
// });
// })

// app.get("/", function(req, res){
//     let token = jwt.sign({email: "Saurav@gmail.com"}, "secret");
//     res.cookie("token", token)
//     res.send("done")
//     console.log(token);

// })

// app.get("/read", function(req, res){
//     console.log(req.cookies.token);

// })

// To verify data------------------------------------------------
// app.get("/read", function (req, res) {
//     let data = jwt.verify(req.cookies.token, "secret")
//     console.log(data);

// })



app.listen(3000)
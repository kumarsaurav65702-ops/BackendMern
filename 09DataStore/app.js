const express = require('express')
const app = express()
const userModel = require("./models/user");
const postModel = require("./models/post");
const user = require('./models/user');

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.set("view engine", 'ejs')
app.get("/", (req, res) => {
    res.render("index")
})

app.get("/create", async (req, res) => {
 let user = await userModel.create({
    username: "Saurav",
    email: "saurav@gmail.com",
    age:28,
   })
   res.send(user)
})

app.get("/post/create", async (req, res) => {
  let post = await  postModel.create({
        postdata: "hello everyone!",
        user: '69d73013963544ca48f0c277'
    })
  let user = await  userModel.findOne({_id: '69d73013963544ca48f0c277'})
  user.posts.push(post._id)
  await user.save()
  res.send({user, post})
})

app.listen(3000)
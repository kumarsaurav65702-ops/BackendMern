const express = require('express');
 
const app = express();

const userModel = require('./usermodel') // We have imported the usermodel file in which we have created the schema and model for the user collection. With the help of this model we can perform create, read, update and delete operations on the database. 

app.get("/", (req, res)=>{
res.send("welcome")
})

app.get("/create", async(req, res) => {
let createdUser = await userModel.create({
    name: "Geetika",
    email: "geetika@gmail.com",
    username: "dabbu"
})
res.send(createdUser)
})

// To update the user we have to use the updateOne method of the model.
// userModel.findOneAndUpdate(findOne, update, {returnDocument: "after"})

app.get("/update", async(req, res) => {
    let updatedUser = await userModel.findOneAndUpdate({username: "hannu"}, {name: "Saurav"}, {returnDocument: "after"})

    res.send(updatedUser)
})

// To read or find users
app.get("/read", async(req, res) => {
let users = await userModel.find();
res.send(users)
})

// To find any particular user
// app.get("/read", async (req, res) => {
//     let users = await userModel.find({username: "dabbu"})
//     res.send(users)
// })

// To delete users
app.get("/delete", async (req, res) => {
    let users = await userModel.findOneAndDelete({username: "dabbu"})
    res.send(users)
})

app.listen(3000)
const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/mongopractice');

const userSchema = mongoose.Schema({  //mongoose.Shema is a method which accepts an object
    name: "string",
    username: "string",
    email: "string"
})

module.exports = mongoose.model("user", userSchema); // With the help of mongoose.model we can perform create, read, update and delete operations on the database. It accepts two parameters, first is the name of the collection and second is the schema which we have created.
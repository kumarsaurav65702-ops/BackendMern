const express = require("express")
const app = express();

// To setup ejs and ejs page------------------------
 
// install npm => npm init
// install express => npm i express
// install nodemon => npm i nodemon -g
// install ejs from npm => npm i ejs

// setup ejs as view engine
// Make a folder name "views"
// inside the "views" folder make a file "index.ejs" it works like index.html
// in index.ejs to calculate <h1> <%= 2+2%>


app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.set('view engine', 'ejs')

app.get("/", function(req, res){
    res.render("index")
})

app.listen(3000)
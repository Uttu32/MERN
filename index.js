const express = require("express");
const bodyParser = require("body-parser");
const ejs = require('ejs');

const app = express();
app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({extended:false}));

const User = [
    {
        name:"Utkarsh",
        id:1,
        lname: 'Sharma',
        isPremium: false,
        userName: 'utkarsh',
        hobby:["kuch nahi", "Kismat bahut achi hai meri specially 2024 me"]
    },
    {
        name:"Shivani",
        id:2,
        lname: 'Kothekar',
        isPremium: true,
        userName: 'shivani',
        hobby:['Playing Guitar', 'Cute cute faces banana', 'Mujhse pyaar krna']
    }
];

app.get("/", (req, res) => {
    res.status(200).send("I love you Shivani baccha")
})

app.get("/user", (req, res) => {
    res.json(User);
})

app.get("/register", (req, res) => {
    res.render('register', {name:'Utkarshivani'})
})

app.get("/register/:name", (req, res) => {
    console.log(req.params);
    let obj = User.find((ele) => ele.userName === req.params.name);
    console.log(obj)
    res.render('register', obj)
})

//let's create a server
const PORT = 3000;
app.listen(PORT, ()=> {
    console.log(`server started at http://localhost:${PORT} `)
})
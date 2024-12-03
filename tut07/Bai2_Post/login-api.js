const fs = require('fs')
const express = require("express");
const app = express();

const multer = require("multer");
// for application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true })); // built-in middleware
// for application/json
app.use(express.json()); // built-in middleware
// for multipart/form-data (required with FormData)

app.use(multer().none()); // requires the "multer" module

const PORT = 3000

app.use(express.static('public'));

function readUser(){
    const data = fs.readFileSync('users.json')
    return JSON.parse(data)
}

app.post("/login",(req,res)=>{

    const {user, password} = req.body
    console.log(user);
    console.log(password);

    const usersData = readUser()

    const foundUser = usersData.find(u => u.username === user && u.password === password)

    if(foundUser){
        res.send('Login successful')
    }else{
        res.send('Invalid username or password')
    }
})

app.get("/users", (req, res) => {
    try {
        // Đọc dữ liệu từ file users.json
        const usersData = readUser();

        // Trả về dữ liệu người dùng dưới dạng JSON
        res.json(usersData);
    } catch (err) {
        console.error(err);
        res.status(500).send("Something went wrong while retrieving users.");
    }
});



app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
})
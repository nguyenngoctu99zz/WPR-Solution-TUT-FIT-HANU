const express = require('express')
const app = express()
const fs = require('fs')
const path = require('path')
const crypto = require('crypto')
const cookieParser = require('cookie-parser')
const handleBars = require('express-handlebars')
app.use(express.urlencoded({extended: true}))
app.use(cookieParser())

const hbs = handleBars.create({
    helpers: {
        formatDate: function (signupTime) {
            return new Date(signupTime).toLocaleString();
        }
    },
    defaultLayout: false
});
app.engine('handlebars', hbs.engine)
app.set('view engine', 'handlebars')
// app.set('views', './views')
const userDataPath = path.join(__dirname, 'users.json')
const loadUsers = () =>{
    const data = fs.readFileSync(userDataPath)
    return JSON.parse(data)
}

const encryptCookie = (cookie) =>{
    const cipher = crypto.createCipheriv('aes-128-ecb', Buffer.from('1234567890abcdef'), null)
    let encrypted = cipher.update(cookie.toString(), 'utf-8', 'base64')
    encrypted += cipher.final('base64')
    return encrypted
}
const decryptCookie = (cookie) =>{
    const decipher = crypto.createDecipheriv('aes-128-ecb', Buffer.from('1234567890abcdef'), null)
    let decrypted = decipher.update(cookie.toString(), 'base64', 'utf-8')
    decrypted += decipher.final('utf-8')
    return decrypted
}
app.get("/login", (req, res) => {
    res.render("login", {error: null});
})
app.post('/login', (req, res) => {
    const { username, password} = req.body
    const users = loadUsers()
    const user = users.find(u => u.username === username)

    if (!user) {
        return res.render('login', {error: "User not found!"})
    }
    if (user.password !== password) {
        return res.render('login', {error: 'Wrong password!'})
    }

    const encryptedUserID = encryptCookie(user.id)
    res.cookie('user', encryptedUserID)
    res.redirect('/profile')
})
app.get("/profile", (req, res) => {
    const userId = req.cookies.user ? decryptCookie(req.cookies.user) : null
    const users = loadUsers()
    const user = users.find(u => u.id === parseInt(userId))

    if (!user) {
        return res.redirect('/login')
    }
    res.render('profile',  {user})
})

app.get('/logout', (req, res) => {
    res.clearCookie('user')
    res.redirect("/login")
})
app.listen(3000)
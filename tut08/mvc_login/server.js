const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const handleBars = require('express-handlebars');
const { showLoginPage, handleLogin, showProfilePage, handleLogout } = require('./controllers/userController.js');

app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

const hbs = handleBars.create({
    helpers: {
        formatDate: function (signupTime) {
            return new Date(signupTime).toLocaleString();
        }
    },
    defaultLayout: false
});
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.get("/login", showLoginPage);
app.post('/login', handleLogin);
app.get("/profile", showProfilePage);
app.get('/logout', handleLogout);

app.listen(3000)
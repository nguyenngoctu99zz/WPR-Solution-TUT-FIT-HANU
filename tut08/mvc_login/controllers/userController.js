const { findUserByUsername, findUserById } = require('../models/userModel.js');
const { encryptCookie, decryptCookie } = require('../middlewares/cookieMiddleware.js');

const showLoginPage = (req, res) => {
    res.render('login', { error: null });
};

const handleLogin = (req, res) => {
    const { username, password } = req.body;
    const user = findUserByUsername(username);

    if (!user) {
        return res.render('login', { error: "User not found!" });
    }
    if (user.password !== password) {
        return res.render('login', { error: 'Wrong password!' });
    }

    const encryptedUserID = encryptCookie(user.id);
    res.cookie('user', encryptedUserID);
    res.redirect('/profile');
};

const showProfilePage = (req, res) => {
    const userId = req.cookies.user ? decryptCookie(req.cookies.user) : null;
    const user = findUserById(userId);

    if (!user) {
        return res.redirect('/login');
    }
    res.render('profile', { user });
};

const handleLogout = (req, res) => {
    res.clearCookie('user');
    res.redirect("/login");
};

module.exports = { showLoginPage, handleLogin, showProfilePage, handleLogout };
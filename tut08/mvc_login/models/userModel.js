const fs = require('fs');
const path = require('path');

const userDataPath = path.join(__dirname, '../users.json');

const loadUsers = () => {
    const data = fs.readFileSync(userDataPath);
    return JSON.parse(data);
};

const findUserByUsername = (username) => {
    const users = loadUsers();
    return users.find(u => u.username === username);
};

const findUserById = (id) => {
    const users = loadUsers();
    return users.find(u => u.id === parseInt(id));
};

module.exports = { loadUsers, findUserByUsername, findUserById };
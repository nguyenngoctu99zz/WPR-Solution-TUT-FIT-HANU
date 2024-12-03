const express = require("express");
const app = express();
const mysql = require("mysql2");


const conn = mysql.createConnection({
    user: 'root',
    password: '12345678',
    database: 'wpr2024'
}).promise();

// serve static files on public folder?
app.use(express.static('public'));


app.get("/games/genres", async (req, res) => {
    try {
        let [rows] = await conn.query("SELECT * FROM genres ORDER BY genre_name ASC");
        res.json(rows);
    } catch (err) {
        res.status(500).send("Something's wrong on endpoint 1.");
    }
});



app.get("/games/list/:genreid/:year", async (req, res) => {
    let genreid = req.params.genreid;
    let year = req.params.year;
    console.log(genreid);
    console.log(year);
    try {
        let sql = "SELECT id, name, platform, publisher FROM games WHERE genre = ? AND release_year = ? LIMIT 10";
        let [rows] = await conn.query(sql, [genreid, year]);
        console.log(rows);
        res.json(rows);
    } catch (err) {
        res.status(500).send("Something's wrong on endpoint 2.");
    }
});

app.listen(8000);


app.use(express.json()); // Middleware để parse JSON trong body của request.

app.post("/games/add", async (req, res) => {
    const { name, platform, publisher, genre, release_year } = req.body;

    // Kiểm tra các dữ liệu có hợp lệ không
    if (!name || !platform || !publisher || !genre || !release_year) {
        return res.status(400).send("All fields are required.");
    }

    try {
        // Thực hiện câu lệnh INSERT
        let sql = `INSERT INTO games (name, platform, publisher, genre, release_year) VALUES (?, ?, ?, ?, ?)`;
        await conn.query(sql, [name, platform, publisher, genre, release_year]);
        res.status(201).send("New game added successfully.");
    } catch (err) {
        console.error(err);
        res.status(500).send("Something's wrong on endpoint 3.");
    }
});

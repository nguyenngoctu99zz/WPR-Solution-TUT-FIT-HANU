const express = require('express');
const app = express();

app.get('/hello', (req, res) => {
    const name = req.query.name;
    if (name) {
        res.send(`Hello ${name}`);
    } else {
        res.status(404).send('Not Found');
    }
});

app.listen(3000, () => {
    console.log('Server is listening on port 3000');
});

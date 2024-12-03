const express = require('express');
const app = express();
const port = 3000;

app.get('/math/circle/:r', (req, res) => {
    const radius = parseFloat(req.params.r);
    if (isNaN(radius) || radius <= 0) {
        return res.status(400).json({ error: 'Invalid radius. Please provide a positive number.' });
    }

    const area = Math.PI * radius * radius;
    const circumference = 2 * Math.PI * radius;

    res.json({
        area: area.toFixed(2),
        circumference: circumference.toFixed(2)
    });
});

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});

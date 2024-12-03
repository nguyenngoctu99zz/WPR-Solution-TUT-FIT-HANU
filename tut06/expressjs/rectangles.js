const express = require('express');
const app = express();

app.get("/math/rectangle/:width/:height", (req, res)=>{
    const width = req.params.width
    const height = req.params.height
    if (isNaN(width) || width <= 0|| isNaN(height) || height <= 0) {
        return res.status(400).json({ error: 'Invalid width or height. Please provide a positive number.' });
    }
    const area = 2 * (width + height)
    const circumference = width * height
    res.json({
        area: area.toFixed(2),
        circumference: circumference.toFixed(2)
    });
})
app.listen(3000)
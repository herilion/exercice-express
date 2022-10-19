const express = require('express');
const app = express();
app.get("/", (req, res) => {
    res.sendFile(__dirname + '/pages/page1.html')
})
app.listen(8000)

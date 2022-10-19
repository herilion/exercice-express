const express = require('express');
const app = express();
app.get("/", (req, res) => {
    res.sendFile(__dirname + '/pages/page1.html')
});

app.get("/page2", (req, res) => {
    res.sendFile(__dirname + '/pages/page2.html')
});

app.get("/pages3", (req, res) => {
    res.sendFile(__dirname + '/pages/page3.html')
})
app.listen(8000)

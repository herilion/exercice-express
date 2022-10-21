const express = require('express');
const app = express();
const path = require('path');
app.set('view engine', 'ejs');
app.get("/", (req, res) => {
    res.render(path.resolve('./pages/page1'))
});

app.get("/page2", (req, res) => {
    res.render(path.resolve('./pages/page2'))
});

app.get("/page3", (req, res) => {
    res.render(path.resolve('./pages/page3'))
})
app.listen(8001)

const express = require('express');
const app = express();
const path = require('path');
app.set('view engine', 'ejs');
app.get("/", (req, res) => {
    res.render(path.resolve('./pages/accueil'))
});
app.get("/accueil", (req, res) => {
    res.render(path.resolve('./pages/accueil'))
});

app.get("/about", (req, res) => {
    res.render(path.resolve('./pages/about'))
});

app.get("/contact", (req, res) => {
    res.render(path.resolve('./pages/contact'))
})
app.listen(8001)

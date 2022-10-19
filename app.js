const express = require('express');
const app = express();
app.get("/", (req, res) => {
    res.send('Bonjour la salle, il est ' + dateNow)
})
app.listen(8000)
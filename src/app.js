const express = require('express');
const app = express();
const path = require('path');

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html'));
});

app.listen(process.env.PORT || 3000, function () {
    let date = new Date(Date.now());
    let serverStartTime = date.getDate() + "." + date.getMonth() + "." + date.getFullYear() + "  " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
    console.log("Server was start/restart on port 3000: " + serverStartTime);
});
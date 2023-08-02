require('dotenv').config();

const express = require('express');
const app = express();
const port = 80;

const path = require('path');

let initialpath = path.join(__dirname, "src");

app.get("/", (req, res) => {
    res.sendFile(path.join(initialpath, "home.html"))
})

app.get("/activities", (req, res) => {
    res.sendFile(path.join(initialpath, "activities.html"))
})

app.get("/gpt", (req, res) => {
    res.sendFile(path.join(initialpath, "gpt404.html"))
})

app.get("/license", (req, res) => {
    res.sendFile(path.join(initialpath, "licen.md"))
})

app.get("/subscribe", (req, res) => {
    res.sendFile(path.join(initialpath, "subscribe.html"))
})

app.use(express.static(initialpath));
app.use(express.Router);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});

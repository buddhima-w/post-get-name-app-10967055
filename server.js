const express = require("express");
const app = express();
const path = require("path");

app.use(express.urlencoded({ extended: true }));

let name = "";

// GET - show HTML
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

// POST - store name
app.post("/submit", (req, res) => {
    name = req.body.username;
    res.redirect("/hello");
});

// GET - display name
app.get("/hello", (req, res) => {
    res.send(`<h1>Hello, ${name}!</h1>`);
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
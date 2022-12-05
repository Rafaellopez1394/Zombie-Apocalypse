const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const userRoute = require("./routes/user");
const path = require('path');
const http = require('http');

// settings
const app = express();
const port = process.env.PORT || 9002;
const server = http.createServer(app);
// middlewares
app.use(express.json());
app.use("/api", userRoute);

// routes
app.get("/", (req, res) => {
    //res.send("Welcome to my API");
    res.sendFile(path.join(__dirname, '/index.html'));
});
app.get("/Login", (req, res) => {
    //res.send("Welcome to my API");
    res.sendFile(path.join(__dirname, '/login.html'));
});

app.get("/Register", (req, res) => {
    //res.send("Welcome to my API");
    res.sendFile(path.join(__dirname, '/register.html'));
});

app.get("/Home", (req, res) => {
    //res.send("Welcome to my API");
    res.sendFile(path.join(__dirname, '/home.html'));
});
// mongodb connection
mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => console.log("Connected to MongoDB"))
    .catch((error) => console.error(error));

// server listening
server.listen(port, () => console.log("Server listening to", port));

// este es la logica de los sockets
//require('./sockets')(server);
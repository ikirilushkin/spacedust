require('dotenv').config();
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.get("/ping", (req, res) => {
  res.send("Hello World!");
});

app.use("/api/users", require("./api/users"));

async function connect() {
    try {
        mongoose.Promise = global.Promise;
        await mongoose.connect(process.env.MLAB_URL);
    } catch (err) {
        console.log('Mongoose error', err);
    }
    app.listen(3000);
    console.log('API listening on localhost: 3000');
}

connect();

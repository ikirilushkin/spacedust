require('dotenv').config();
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
const session = require('express-session');
const expressJwt = require('express-jwt');
const app = express();

const checkSession = (req, res, next) => {
    if (req.session.user && req.session.isAuthenticated) {
        next();
    } else {
        res.status(403).json({ message: "Unauthorized" })
    }
};

const checkJwt = expressJwt({ secret: process.env.JWT_SECRET });

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// app.use(session({
//     secret: process.env.SESSION_SECRET,
//     resave: false,
//     saveUninitialized: false,
//     cookie: { secure: false, httpOnly: true, maxAge: 3600000 }
// }));
app.get("/ping", (req, res) => {
  res.send("Hello World!");
});

app.use("/api/users", require("./api/users"));
app.use('/api/authenticate', require('./api/authenticate'));
app.use('/api/logout', require('./api/logout'));
// app.use(checkSession);
app.use(checkJwt);
app.use('/api/exoplanets', require('./api/exoplanets'));

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

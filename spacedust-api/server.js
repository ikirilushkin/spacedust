require('dotenv').config();
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
const session = require('express-session');
const expressJwt = require('express-jwt');
const jwtDecode = require('jwt-decode');
const app = express();

const checkSession = (req, res, next) => {
    if (req.session.user && req.session.isAuthenticated) {
        next();
    } else {
        res.status(403).json({ message: "Unauthorized" })
    }
};

const attachUser = (req, res, next) => {
    const token = req.headers.authorization;
    if (token === 'Bearer null' || !token) {
        return res.status(401).json({ message: 'Authentication invalid' });
    }
    const decodedToken = jwtDecode(token.replace('Bearer ', ''));
    if (!decodedToken) {
        return res.status(401).json({ message: 'There was a problem authorizing the request' });
    } else {
        req.user = decodedToken;
        next();
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
app.use(attachUser);
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

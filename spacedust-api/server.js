const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.get("/ping", (req, res) => {
  res.send("Hello World!");
});

app.use("/api/users", require("./api/users"));

app.listen(3000);

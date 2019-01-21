const express = require("express");
const router = express.Router();
const controller = require("./controller");

router.route("/").post(controller.postUser);
router.route("/").get((req, res) => {
  res.send("hello user");
});

module.exports = router;

var express = require("express");
var router = express.Router();

const users = [];
/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send(users);
});

router.post("/score", function (req, res, next) {
  console.log(req.body);
  const { userName, score } = req.body;
  users.push({ userName, score: Number(score) });
  res.send({ success: true });
});

module.exports = router;

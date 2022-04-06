var express = require("express");
var router = express.Router();

const users = [];
/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send(
    users
      .sort((user1, user2) => {
        user1.score < user2.score ? 1 : user1.score > user2.score ? -1 : 0;
      })
      .slice(0, 10)
  );
});

router.post("/score", function (req, res, next) {
  console.log(req.body);
  const { userName, score } = req.body;
  users.push({ userName, score: Number(score) });
  res.send({ success: true });
});

module.exports = router;

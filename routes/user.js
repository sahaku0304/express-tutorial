const express = require("express");
const router = express.Router();

// router.use(mylogger);

router.get("/", mylogger, (req, res) => {
  res.send("ユーザーです・")
});
router.get("/info", (req, res) => {
  res.send("ユーザー情報です・")
});
router.get("/:id", (req, res) => {
  res.send(`${req.params.id}のユーザー情報`)
});

//ミドルウェア→一番上で宣言する
function mylogger(req, res, next) {
  console.log(req.originalUrl);
  next();
}

module.exports = router;
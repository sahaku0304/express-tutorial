const express = require("express");
const router = express.Router();

// ミドルウェアをルーター全体に適用
router.use(mylogger);

router.get("/", (req, res) => {
  res.send("ユーザーです");
});

router.get("/info", (req, res) => {
  res.send("ユーザー情報です");
});

router.get("/:id", (req, res) => {
  res.send(`${req.params.id}のユーザー情報`);
});

// ミドルウェアの定義
function mylogger(req, res, next) {
  console.log(req.originalUrl);
  next();
}

module.exports = router;
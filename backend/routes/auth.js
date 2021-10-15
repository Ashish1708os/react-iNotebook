const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  let obj = {
    a: "thios",
    number: 1234,
  };
  res.json(obj);
});

module.exports = router;

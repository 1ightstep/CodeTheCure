const express = require("express");

const router = express.Router();

router.route("/").get((req, res) => {
  const query = req.query.q;
  if (!query.trim()) return;
});

module.exports = router;

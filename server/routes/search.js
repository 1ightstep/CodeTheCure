const express = require("express");
const qwenFree = require("../api/models/qwenFree");
const getArxiv = require("../api/sources/getArxiv");
const { EXTRACTER_PROMPT } = require("../constants/systemPrompts");

const router = express.Router();

router.route("/").get(async (req, res) => {
  const query = req.query.query;
  if (!query.trim()) return;

  const qwenResults = await qwenFree(query);
  const keywords = qwenResults.join(" ");
  const results = await getArxiv(keywords);

  console.log(results);
  res.send(results);
});

module.exports = router;

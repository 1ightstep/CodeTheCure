const express = require("express");
const cors = require("cors");
const logger = require("./middlewares/logger");
require("dotenv").config();

const app = express();
app.use(cors({ origin: "http://localhost:3000" }));
app.use(logger);

app.get("/", (req, res) => {
  res.send("Welcome to the Code The Cure API!");
});

const searchRouter = require("./routes/search");
app.use("/api/v1/search", searchRouter);

app.listen(3001, () => {
  console.log("Server is running on http://localhost:3001");
});

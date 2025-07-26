function logger(req, res, next) {
  console.log("User has arrived");
  next();
}

module.exports = logger;

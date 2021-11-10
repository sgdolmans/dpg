module.exports = app => {
  const winners = require("../controllers/winner.controller.js");

  // CREATE NEW WINNER
  app.post("/register", winners.create);

  // GET LEADERBOARD
  app.get("/leaderboard", winners.findAll);

};

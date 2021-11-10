module.exports = app => {
  const winners = require("../controllers/winner.controller.js");

  // CREATE NEW WINNER
  app.post("/winner", winners.create);

  // GET LEADERBOARD
  app.get("/leaderboard", winners.findAll);

  // GET TOTAL PLAYERS
  app.get("/numberofplayers/:prizeId", winners.findOne);


};

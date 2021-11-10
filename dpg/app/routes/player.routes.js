module.exports = app => {
  const players = require("../controllers/player.controller.js");

  // POST /getprize

  // GET TOTAL PLAYERS that player for single prizeid
  app.get("/numberofplayers/:prizeId", players.findOne);

  // GET TOTAL PLAYERS that players
  app.get("/numberofplayers", players.findAll);

};

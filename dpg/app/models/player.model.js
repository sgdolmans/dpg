const sql = require("./db.js");

const Player = function(player) {
  this.email = player.email;
  this.name = player.name;
  this.active = player.active;
};

Player.findById = (prizeId, result) => {
  sql.query(`SELECT COUNT(*) AS numberofplayers FROM players WHERE prizename = '${prizeId}'`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    

    if (res.length) {
      console.log("found players: ", res[0]);
      console.log();
      result(null, res[0]);
      return;
    }

    // not found prize with the id
    result({ kind: "not_found" }, null);
  });
};


Player.getAll = result => { 
  sql.query("SELECT COUNT(*) AS numberofplayers FROM players", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("total playercount: ", res);
    result(null, res);
  });
};

module.exports = Player;

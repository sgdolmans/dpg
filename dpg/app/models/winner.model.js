const sql = require("./db.js");

const Winner = function(winner) {
  this.email = winner.email;
  this.name = winner.name;
  this.active = winner.active;
};

Winner.create = (newWinner, result) => {
  sql.query("INSERT INTO test SET ?", newWinner, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created winners: ", { id: res.insertId, ...newWinner });
    result(null, { id: res.insertId, email: 'test' });
  });
};

Winner.findById = (prizeId, result) => {
  sql.query(`SELECT COUNT(*) FROM players WHERE prize = '${prizeId}'`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    

    if (res.length) {
      console.log("found prize: ", res[0]);
      console.log();
      result(null, res[0]);
      return;
    }

    // not found prize with the id
    result({ kind: "not_found" }, null);
  });
};

Winner.getAll = result => { 
  sql.query("SELECT date, firstname, LEFT(lastname, 1), prize FROM winners ORDER BY date", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("winners: ", res);
    result(null, res);
  });
};

module.exports = Winner;

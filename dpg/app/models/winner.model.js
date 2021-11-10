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

Winner.getAll = result => { 
  sql.query("SELECT date, firstname, LEFT(lastname, 1) AS lastname, prize FROM winners ORDER BY date", (err, res) => {
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

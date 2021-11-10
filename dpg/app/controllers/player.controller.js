const Player = require("../models/player.model.js");


// Get totalplayers by prizeId
exports.findOne = (req, res) => {
  Player.findById(req.params.prizeId, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found prize with id ${req.params.prizeId}.`
        });
      } else {
        res.status(500).send({
          message: "Error retrieving prize with id " + req.params.prizeId
        });
      }
    } else res.send(data);
  });
};



// Get totalplayers 
exports.findAll = (req, res) => {
  Player.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving players."
      });
    else res.send(data);
  });
};

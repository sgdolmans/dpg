const Winner = require("../models/winner.model.js");

exports.create = (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  // Create Winner
  const winner = new Winner({
    email: req.body.email,
    name: req.body.name,
    active: req.body.active
  });

  // create Winner
  Winner.create(winner, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Winners."
      });
    else res.send(data);
  });
};

// Get all Winner
exports.findAll = (req, res) => {
  Winner.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving winners."
      });
    else res.send(data);
  });
};

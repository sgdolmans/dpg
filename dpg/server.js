require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

// main
app.get("/", (req, res) => {
  res.json({ message: "API CALLS: /leaderboard /numberofplayers/{'prizename'} /register /getprize" });
});

require("./app/routes/winner.routes.js")(app);
require("./app/routes/player.routes.js")(app);

// set port, listen for requests
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

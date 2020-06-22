const express = require("express");
const games = require("./games.json");
const app = express();

app.get("/", (req, res) => {
  console.log("just check");
  res.send("welcome to video games");
});

app.get("/games", (req, res) => {
  
  res.send(games);
});

app.listen(1234, () => console.log("Welcome to video games"));
console.log("Hello Server");

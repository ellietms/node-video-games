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
function handleAboutReq(req, res) {
  res.send("<h1>This page is running by Ellie</h1>");
}
app.get("/about", handleAboutReq);


app.listen(1234, () => console.log("Welcome to video games"));
console.log("Hello Server");

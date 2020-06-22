const express = require("express");
const app = express();
app.get("/",(req,res) => {
    console.log("just check")
    res.send("welcome to video games");
})

app.listen(1234,() => console.log("Welcome to video games"))
console.log("Hello Server");
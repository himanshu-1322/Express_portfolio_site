// Express Application

const express = require("express");

const app = express();

// Configure App object
// Associate middleware functions to path
function landingPage(req, res, next) {
  res.send("Welcome to my portfolio WebApp!");
}
app.get("/", landingPage);

app.get("/about", (req, res, next) => {
  res.send("This page is about me.");
});

// Make app listen to http requests on a port
app.listen(3000, () => {
  console.log("App is running on http://localhost:3000");
});

const express = require("express");
const session = require("express-session");
const mongoose = require("mongoose");
const passport = require("passport");
const path = require("path");
const db = require("./models");
const routes = require("./routes");
const PORT = process.env.PORT || 3001;
const app = express();
const cors = require("cors");

// Define express middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Define passport authentication middleware
passport.use()// db.User.createStrategy());
passport.serializeUser()//db.User.serializeUser());
passport.deserializeUser()//db.User.deserializeUser());


app.use(express.static(__dirname + "/client/public"));

// Add cors so that frontend can talk to backend
app.use(cors());
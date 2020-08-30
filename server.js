const express = require("express");
const session = require("express-session");
<<<<<<< HEAD
const mysql = require("mysql2");
=======
>>>>>>> d2630b29c78094e6e7cd714c311a955127ed7bcd
const passport = require("passport");
const path = require("path");
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

<<<<<<< HEAD
// Define passport authentication middleware
passport.use(db.User.createStrategy());
passport.serializeUser(db.User.serializeUser());
passport.deserializeUser(db.User.deserializeUser());
=======
app.use(express.static(__dirname + "/client/public"));

>>>>>>> d2630b29c78094e6e7cd714c311a955127ed7bcd

// Define passport authentication middleware
// passport.use()// db.User.createStrategy());
// passport.serializeUser()//db.User.serializeUser());
// passport.deserializeUser()//db.User.deserializeUser());

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/public/index.html"));
});

// Add cors so that frontend can talk to backend
app.use(cors());

<<<<<<< HEAD

// Use express sessions to keep track of our user's login status
app.use(
  session({ secret: "keyboard cat", resave: false, saveUninitialized: false })
);
app.use(passport.initialize());
app.use(passport.session());

// initialize sql connection
mysql.Connection();

app.use(routes);

// API and App routes
app.use(routes);

// Send every other request to the React app
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/public/index.html"));
});

=======
>>>>>>> d2630b29c78094e6e7cd714c311a955127ed7bcd
app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
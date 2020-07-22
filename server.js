// Dependencies
var express = require("express");
var session = require("express-session");
var passport = require("./config/passport");
var exphbs = require("express-handlebars");
require("dotenv").config();


// Sets up the Express App
var app = express();
var PORT = process.env.PORT || 8000;

// Requiring our models for syncing
var db = require("./models");
const { create } = require("express-handlebars");

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory
app.use(express.static("public"));

// Requiring passport as we've configured it
app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());


// Handlebars
app.engine(
  "handlebars",
  exphbs({
    defaultLayout: "main"
  })
);
app.set("view engine", "handlebars");

var hbs = exphbs.create({});

hbs.handlebars.registerHelper('time', function (createdAt) {
  return (createdAt.getMonth() + 1) + "/" + createdAt.getDate() + "/"  + createdAt.getFullYear()
})

// Routes - more names to come 
require("./routes/htmlRoutes.js")(app);
require("./routes/apiRoutes.js")(app);

// Syncing our sequelize models and then starting our Express app
db.sequelize.sync({ force: true }).then(function () {
  app.listen(PORT, function () {
    console.log("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT, PORT);
  });
});
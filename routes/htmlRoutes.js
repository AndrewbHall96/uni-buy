var db = require("../models");
var path = require("path");

module.exports = function (app) {
  // Load index page
  app.get("/", function (req, res) {
    db.Seller.findAll({
      where: {
        show: true
      },
      raw: true
    }).then(function (Post) {
      console.log(Post);
      res.render("home", { listing: Post });
    });
  });

  app.get('/buyItem/:id', function (req, res) {

    db.Seller.findOne({
      where: {
        id: req.params.id
      }, 
      raw: true
    })
      .then(function (Posts) {
        
        res.render("buyItem", Posts);
      });
  });

  // Testing login page
  app.get("/login", (req, res) => {
    res.render("login");
  });

  app.get("/newitem", function (req, res) {
    res.render("newItem");
  });

  //sign-up page
  app.get("/signup", function (req, res) {
    res.render("signup");
  });

  app.get("/index", function (req, res) {
    res.render("index");
  });

  // res.sendFile(path)
  // db.Example.findAll({}).then(function(dbExamples) {
  //   res.render("index", {
  //     msg: "Welcome!",
  //     examples: dbExamples
  //   });
  // });

  // Load example page and pass in an example by id
  // app.get("/example/:id", function (req, res) {
  //   db.Example.findOne({ where: { id: req.params.id } }).then(function (dbExample) {
  //     res.render("example", {
  //       example: dbExample
  //     });
  //   });
  // });

  // Render 404 page for any unmatched routes
  // app.get("*", function (req, res) {
  //   res.render("404");
  // });
};

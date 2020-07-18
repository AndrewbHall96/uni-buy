var db = require("../models");
// var path = require("path");


module.exports = function(app) {
  // Get all examples
  app.get("/api/items", function(req, res) {
    db.Seller.findAll({}).then(function(dbSellers) {
      res.json(dbSellers);
    });
  });

  // Create a new example
  app.post("/api/item", function(req, res) {
    db.Seller.create(req.body).then(dbSellers => {
      res.json(dbSellers);
    })
  });

  // Delete an example by id
  app.delete("/api/items/:id", function(req, res) {
    db.Seller.destroy({ where: { id: req.params.id } }).then(function(dbSellers) {
      res.json(dbSellers);
    });
  });
};

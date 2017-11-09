
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  app.get("/api/recipes", function(req, res) {
    db.recipes.findAll({}).then(function(dbrec) { 
      res.json(dbRecipes);
    });
  });

  // POST route for saving a new recipes
  app.post("/api/recipes", function(req, res) {
    db.recipes.create({
      text: req.body.text,
      complete: req.body.complete
    }).then(function(dbrecipes) {
      res.json(dbRecipes);
    })
    .catch(function(err) {
      res.json(err);
    });
  });

  // DELETE route for delete Recipes
  app.delete("/api/recipes/:id", function(req, res) {
    db.recipes.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbTodo) {
      res.json(dbTodo);
    });
  });

  // PUT route for updating recipes.
  app.put("/api/recipes", function(req, res) {
    db.recipes.update({
      text: req.body.text,
      complete: req.body.complete
    }, {
      where: {
        id: req.body.id
      }
    }).then(function(dbTodo) {
      res.json(dbRecipes);
    })
    .catch(function(err) {
      res.json(err);
    });
  });
};
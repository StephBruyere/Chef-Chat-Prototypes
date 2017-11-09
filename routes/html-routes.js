var path = require("path");
// Routes
// =============================================================
module.exports = function(app) {

  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  app.get("/form-page", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/form-page.html"));
  });
 
  app.get("/menu", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/menu.html"));
  });

  app.get("/recipes", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/recipes.html"));
  });
};
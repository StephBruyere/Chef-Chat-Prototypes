
    $("#subBtn").on("click", function(event) {
        app.get("/recipes", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/recipes.html"));
  });
 }); 
 }     


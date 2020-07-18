$(".dropdown").on("click", function(event) {
    var category = $(this).data("category");
    var update = {
        show: true
      };
      // how to change all other to false
    $.ajax("/api/items/" + category, {
      type: "PUT",
      data: update
    }).then(
      function() {
        console.log("changed eaten", newEat);
        location.reload();
      }
    );
  });

  app.put('/api/items/:category', function(req, res) {
  
    db.Post.update(req.body,
        {
          where: {
            category: req.perams.category
          }
        })
        .then(function(event) {
          res.json(event);
        });
    });


    app.get("/", function(req, res) {
        db.Post.findAll({
            where: {
              show: true
            }
          }).then(function(Posts) {
          res.render("/home", Posts);
        });
      });
  
    
    
    
    
    $(".moreInfo").on("click", function(event){
        var id = $(this).data("id")
        $.ajax("/api/buy/" + id, {
            type: "GET",
          }).then(
            function() {
                window.location.replace("/newItem");
            }
          );
        
    })
    app.get('/api/buy/:id', function(req, res) {
  
        db.Post.findOne({
            where: {
              id: req.params.id
            }
          })
            .then(function(Posts) {
                res.render("buyItem", Posts);
            });
        });
    //move it to the next page


    //how to get button in whoel div to get the affects of its data
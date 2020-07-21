$(function(){
$("#add-item").on("click", function(event) {
    event.preventDefault();
    // make a new Item obj
    console.log($("#title").val().trim())
    var newItem = {
      // name from name input
      firstName: $("#firstName").val().trim(),
      // name from name input
      lastName: $("#lastName").val().trim(),
      // email from email input
      email: $("#email").val().trim(),
      // category from category input
      category: $("#category").val().trim(),
    //   title from title imput
      title: $("#title").val().trim(),
      // price from price input
      price: $("#price").val().trim(),
      // condition from condition input
      condition: $("#condition").val().trim(),
      // link from link input
      link: $("#link").val().trim(),
      // description from description input
      description: $("#description").val().trim()

    };
    console.log(JSON.stringify(newItem))
    // send an AJAX POST-request with jQuery
    
  $.ajax("/api/item", {
    type: "POST",
    data:  newItem
  }).then(function(data) {
    
        console.log("khjhkhkhkhhkhkj");
        // tell the user we're adding a new item with an alert window
        alert("Adding new item...");
      }).catch(err => {
        console.log("Failed to create new item");
        console.log(err)
  
      })
    // empty each input box by replacing the value with an empty string
    $("#firstName").val("");
    $("#lastName").val("");
    $("#email").val("");
    $("#category").val("");
    $("#title").val("");
    $("#price").val("");
    $("#condition").val("");
    $("#link").val("");
    $("#description").val("");

  
    })
})
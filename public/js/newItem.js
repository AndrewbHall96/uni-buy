$("#add-item").on("click", function(event) {
    event.preventDefault();
  
    // make a newCharacter obj
    var newItem = {
      // name from name input
      name: $("#name").val().trim(),
      // role from role input
      role: $("#role").val().trim(),
      // age from age input
      age: $("#age").val().trim(),
      // points from force-points input
      forcePoints: $("#force-points").val().trim()
    };
  
    // send an AJAX POST-request with jQuery
    $.post("/api/new", newItem)
      // on success, run this callback
      .then(function(data) {
        // log the data we found
        console.log(data);
        // tell the user we're adding a character with an alert window
        alert("Adding character...");
      });
  
    // empty each input box by replacing the value with an empty string
    $("#name").val("");
    $("#role").val("");
    $("#age").val("");
    $("#force-points").val("");
  
  });
  
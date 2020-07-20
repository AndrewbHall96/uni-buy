$(".item-category").on("click", function (event) {
  var category = $(this).data("category");
  $.ajax("/api/items/" + category, {
    type: "PUT"
  }).then(
    function () {
      console.log("changed eaten", newEat);
      location.reload();
    }
  );
});





$(".moreInfo").on("click", function (event) {
  var id = $(this).data("id")
  $.ajax("/api/buy/" + id, {
    type: "GET",
  }).then(
    function () {
      window.location.replace("/buyItem");
    }
  );

})

    //move it to the next page


    //how to get button in whoel div to get the affects of its data
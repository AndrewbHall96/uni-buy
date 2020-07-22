$(".item-category").on("click", function (event) {
  var category = $(this).data("category");
  var storageLink = localStorage.getItem("college")
  location.href = "/home/" + storageLink + "/" + category
  // $.ajax("/api/items/" + storageLink + "/" + category, {
  //   type: "PUT"
  // }).then(
  //   function () {
  //     console.log("item chosen");
  //     location.reload();
  //   }
  // );
});

// $(".item-category").on("click", function (event) {
//   var storageLink = localStorage.getItem("college")
//   $.ajax("/items/" + storageLink, {
//     type: "GET"
//   })
// });





// $(".moreInfo").on("click", function (event) {
//   var id = $(this).data("id")
//   $.ajax("/api/buy/" + id, {
//     type: "GET",
//   }).then(
//     function () {
//       window.location.replace("../buyItem");
//     }
//   );

// })

    //move it to the next page


    //how to get button in whoel div to get the affects of its data
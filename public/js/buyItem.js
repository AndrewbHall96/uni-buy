$("#emailBtn").on("click", function (event) {
    var id = $(this).data("id")
    $.ajax("/api/items/" + id, {
        type: "DELETE"
      }).then(
        function () {
          console.log("item bought and removed");
          location.href = "/home/" + localStorage.getItem("college")
        }
      );
})
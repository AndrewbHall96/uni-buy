
$("#dropdown li").on("click", function (event) {
  console.log("button works")
    let value = $(this).data("value")
    saveIt(value)
  })
  
  function saveIt(value){
    localStorage.setItem("college", value)
  }
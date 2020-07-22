var value;
$("#dropdown").on("click", function (event) {
  console.log("button works")
    value = $(this).val()
    exportIt()
  })
  
  function exportIt(){
  const getCollege = () => {
    return value;
  };
  module.exports = getCollege
}

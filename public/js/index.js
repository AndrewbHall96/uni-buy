var value;
$("#dropdown").on("click", function (event) {
    value = $(this).val()
    exportIt()
  })
  
  function exportIt(){
  const getCollege = () => {
    return value;
  };
  exports.getCollege = getCollege;
}

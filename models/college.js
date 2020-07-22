
// Creating our User model
// takes in our function, passes in sequelize, which means we can use it without requiring it. "Sequilize gives us access to the define function(user)"
module.exports = function(sequelize, DataTypes) {
  var College = sequelize.define("College", {
    
    collegeName: {
      type: DataTypes.STRING,
      // allowNull: false
    }
    // The password cannot be nul

  });
  College.associate = function(models) {
    // Associating Author with Posts
    // When an Author is deleted, also delete any associated Posts
    College.hasMany(models.Seller, {
      onDelete: "cascade"
    });
  };
  return College;
}
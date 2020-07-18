module.exports = function(sequelize, DataTypes) {
  var Seller = sequelize.define("Seller", {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false
    },
    show: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    productTitle: {
      type: DataTypes.STRING,
      allowNull: false
    },
    price: {  
      type: DataTypes.STRING,
      allowNull: false
    }, 
    condition: {
      type: DataTypes.STRING,
      allowNull: false
    },
    linkToImage: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  });

  return Seller;
};
module.exports = function (sequelize, DataTypes) {
  var Seller = sequelize.define("Seller", {
    
    
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
    conditionName: {
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
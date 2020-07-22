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
    },
    college: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  });
  Seller.associate = function(models) {
    // We're saying that a Post should belong to an Author
    // A Post can't be created without an Author due to the foreign key constraint
    Seller.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
    // Seller.belongsTo(models.College, {
    //   foreignKey: {
    //     allowNull: false
    //   }
    // });
  };
  return Seller;
};
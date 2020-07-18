module.exports = function(sequelize, DataTypes) {
  var Seller = sequelize.define("Seller", {
    firstName: {
      
    },
    lastName: {

    },
    email: {

    },
    category: {

    },
    show: {

    },
    productTitle: {

    },
    price: {

    }, 
    condition: {

    },
    linkToImage: {

    },
    description: {

    }
  });

  return Seller;
};
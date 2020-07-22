require("dotenv").config();

module.exports = {
  "development": {
    "username": "root",
<<<<<<< HEAD:config/config.json
    "password": "Cookie123",
=======
    "password": process.env.MY_SQL,
    //process.env.MY_SQL,
>>>>>>> 409182cccd06385ce2a822790d3086604aef99dc:config/config.js
    "database": "sellerInfo",
    "host": "127.0.0.1",
    "port": 3306,
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "port": 3306,
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "port": 3306,
    "dialect": "mysql"
  }
}

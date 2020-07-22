require("dotenv").config();

module.exports = {
  "development": {
    "username": "root",
<<<<<<< HEAD
    "password": "Cookie123",
=======
    "password": process.env.MY_SQL,
>>>>>>> c37156b72e983e4e70ed858d825df1bde6dbabd9
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

require("dotenv").config();

module.exports = {
  "development": {
    "username": "root",
<<<<<<< HEAD
    "password": "Cookie123",
=======
    "password": process.env.MY_SQL,
    //process.env.MY_SQL,
>>>>>>> d5db3e25fa1432dba58af5b0b54e4f0031414d03
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

const mysql      = require('mysql');
require('dot-env')
const connection = mysql.createConnection({
  host     : process.env.HOST,
  user     : process.env.USERNAME,
  password : process.env.PASSWORD,
  database : process.env.DB
});

exports.connection = connection
const mysql = require("mysql2");
require("dotenv").config();

// Connexion to DB
const pool = mysql.createPool({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DB,
});

// let sql = "SELECT * FROM Pays;";

// pool.execute(sql, function (err, result) {
//   if (err) throw err;

//   result.forEach((res) => {
//     console.log(res.NomPays);
//   });
// });

module.exports = pool.promise();

// connection.end();

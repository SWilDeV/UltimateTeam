const db = require("../../config/Database");

let getTournaments = function (callback) {
  try {
    let sql = "SELECT * FROM Tournoi;";
    db.query(sql, function (err, result) {
      if (err) callback(err, null);
      else callback(null, result);
    });
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  getTournaments,
};

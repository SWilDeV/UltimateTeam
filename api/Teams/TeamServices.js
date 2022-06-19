const db = require("../../config/Database");

let getTeams = function (callback) {
  try {
    let sql = "SELECT * FROM Equipe;";
    db.query(sql, function (err, result) {
      if (err) callback(err, null);
      else callback(null, result);
    });
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  getTeams,
};

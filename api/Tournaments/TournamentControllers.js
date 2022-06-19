const TournamentServices = require("./TournamentServices");

exports.getAllTournaments = (req, res) => {
  try {
    TournamentServices.getTournaments(function (err, data) {
      if (err) {
        console.log("ERROR : ", err);
      } else {
        res.status(201).json({ data });
      }
    });
  } catch (e) {
    console.log(e);
  }
};

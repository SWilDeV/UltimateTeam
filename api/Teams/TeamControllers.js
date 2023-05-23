const TeamServices = require("./TeamServices");

exports.getAllTeams = (req, res) => {
  try {
    TeamServices.getTeams(function (err, data) {
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

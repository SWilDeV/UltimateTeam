const express = require("express");
const tournamentRouter = express.Router();
const tournamentControllers = require("./TournamentControllers");

//@route GET && POST - /posts/
tournamentRouter.route("/").get(tournamentControllers.getAllTournaments);
// tournamentRouter.route("/id").get(tournamentControllers.getTeamByID);
// tournamentRouter.route("/register").post(tournamentControllers.registerTeam);
// tournamentRouter.route("/edit/id").put(tournamentControllers.editTeam);
// tournamentRouter.route("/addTeamMember").post(tournamentControllers.addTeamMember);
// tournamentRouter.route("/deleteTeam").post(tournamentControllers.deleteTeam);

module.exports = tournamentRouter;

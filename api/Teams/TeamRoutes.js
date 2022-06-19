const express = require("express");
const teamRouter = express.Router();
const teamControllers = require("./TeamControllers");

//@route GET && POST - /posts/
teamRouter.route("/").get(teamControllers.getAllTeams);
// teamRouter.route("/id").get(teamControllers.getTeamByID);
// teamRouter.route("/register").post(teamControllers.registerTeam);
// teamRouter.route("/edit/id").put(teamControllers.editTeam);
// teamRouter.route("/addTeamMember").post(teamControllers.addTeamMember);
// teamRouter.route("/deleteTeam").post(teamControllers.deleteTeam);

module.exports = teamRouter;

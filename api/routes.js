const express = require("express");
const router = express.Router();
const userRouter = require("./Users/UserRoutes");
const teamRouter = require("./Teams/TeamRoutes");
const tournamentRouter = require("./Tournaments/TournamentRoutes");

router.use("/users", userRouter);
router.use("/teams", teamRouter);
router.use("/tournaments", tournamentRouter);

module.exports = router;

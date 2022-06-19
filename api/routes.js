const express = require("express");
const router = express.Router();
const userRouter = require("./Users/UserRoutes");
const teamRouter = require("./Teams/TeamRoutes");

router.use("/users", userRouter);
router.use("/teams", teamRouter);

module.exports = router;

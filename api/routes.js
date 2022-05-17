const express = require("express");
const router = express.Router();
const userRouter = require("./Users/UserRoutes");

router.use("/users", userRouter);

module.exports = router;

const express = require("express")

const petsRoute = require("./pets.route")

const router = express.Router();

router.use("/", petsRoute)

module.exports = router;
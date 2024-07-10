const express = require("express");
const userGuard = require("../middlewares/userGuard");
const adminGuard = require("../middlewares/adminGuard");
const addArea = require("../controllers/area/addArea");
const getAreas = require("../controllers/area/getAreas");

const router = express.Router();

router.get("/", getAreas);

router.post("/", userGuard, adminGuard, addArea);

module.exports = router;

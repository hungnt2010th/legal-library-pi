
const express = require("express");
const router = express.Router();
const laws = require("../models/laws");

router.get("/", laws.getAll);
router.get("/:id", laws.getById);

module.exports = router;

const express = require("express");
const router = express.Router();

const {localFileUpload} = require("../controllers/fileUpload");
const { model } = require("mongoose");


//api Route
router.post("/localFileUpload", localFileUpload);

module.exports = router;

const express = require("express");
const router = express.Router();

const {localFileUpload, imageUpload} = require("../controllers/fileUpload");
const { model } = require("mongoose");


//api Route
router.post("/localFileUpload", localFileUpload);

router.post("/imageUpload", imageUpload);

module.exports = router;

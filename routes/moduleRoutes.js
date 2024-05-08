const express = require("express");

const {
    getModule, 
    getModules, 
    createModule, 
    updateModule, 
    deleteModule
} = require("../controllers/moduleController.js")

const router = express.Router();


router.route("/").get (getModules).post (createModule);


router.route("/:id").get (getModule).put (updateModule).delete (deleteModule);

module.exports = router;
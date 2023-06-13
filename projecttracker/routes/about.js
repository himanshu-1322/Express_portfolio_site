// import express 
const express = require('express');


// create router object 
const router = express.Router();

router.get("/", (req, res, next) => {
    res.render("about", { title: "About Me" });
});

module.exports = router;

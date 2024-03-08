// sample Wiki route module
const express = require('express');
const router = express.Router();

// home route
router.get('/', function (req, res) {
    res.send("Wiki home page");
});

// about route
router.get('/about', function (req, res) {
    res.send("About that wiki…");
});

module.exports = router;
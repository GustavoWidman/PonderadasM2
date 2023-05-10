const express = require('express'); // This is to load the express module
// const loggedIn = require("../controllers/loggedIn")
// const logout = require("../controllers/logout")
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: false })
const db = require('../routes/db-config');
const { parse } = require('path');
const router = express.Router(); // This is to create a router object


router.get("/", (req, res) => {
    res.sendFile('index.html', {root: './public'});
})

router.get("/list", (req, res) => {
    res.sendFile('listaPessoa.html', {root: './public'});
});

router.get("/insert", (req, res) => {
    res.sendFile('inserePessoa.html', {root: './public'});
});

router.get("/delete", (req, res) => {
    res.sendFile('deletePessoa.html', {root: './public'});
});

router.get("/update", (req, res) => {
    res.sendFile('updatePessoa.html', {root: './public'});
});


module.exports = router;
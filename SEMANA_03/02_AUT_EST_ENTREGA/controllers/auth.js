const express = require('express');
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: false })
const db = require('../routes/db-config');

const router = express.Router();

const listModule = require("../controllers/list");
const insertModule = require("../controllers/insert");
const deleteModule = require('../controllers/delete');
const getUpdateModule = require('../controllers/getUpdate');
const putUpdateModule = require('../controllers/putUpdate');

const listPeopleModule = require('../controllers/listPeople');
const list = require('../controllers/list');

// ROUTES

router.get("/list/:id", urlencodedParser, listModule);

router.post("/insert/submit", urlencodedParser, insertModule);

router.delete("/delete/:id", deleteModule);

router.get("/update/:id", getUpdateModule);

router.put("/update/:id", urlencodedParser, putUpdateModule);

router.get("/list", listPeopleModule);

module.exports = router;
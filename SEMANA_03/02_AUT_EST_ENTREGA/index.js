const express = require('express');
// const db = require('./routes/db-config');
const app = express();
const cookie = require('cookie-parser');
const e = require('express');
require('dotenv').config();
const PORT = process.env.PORT || 5000;
app.use('/js', express.static(__dirname + "/public/js"));
app.use('/css', express.static(__dirname + "/public/css"));
// app.use(cookie());
app.use(express.json());
// db.connect((err) => {
//     if(err)throw err;
//     console.log("Connected to database");
// });
app.use('/', require('./routes/pages'));
app.use('/api', require('./controllers/auth'));
app.use(express.static(__dirname + "/public"))
app.listen(PORT);
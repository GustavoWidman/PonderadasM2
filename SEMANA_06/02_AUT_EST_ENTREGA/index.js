const express = require('express');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 5000;
app.use('/js', express.static(__dirname + "/public/js"));
app.use('/css', express.static(__dirname + "/public/css"));
app.use(express.json());
app.use('/', require('./routes/pages'));
app.use('/api', require('./controllers/auth'));
app.use(express.static(__dirname + "/public"));
app.listen(PORT);
console.log(`Server running on port ${PORT}`);
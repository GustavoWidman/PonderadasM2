require('dotenv').config(); // This is to load the .env file

const sqlite = require('sqlite3').verbose(); // This is to load the mysql module

// This is to create a connection to the database, using the values in the .env file
// fetches real db path from ../db/SEMANA_2_ATV_PONDERADA.db`
const db_path = require('path').resolve(__dirname, '../Backend/SEMANA_2_ATV_PONDERADA.db');

const db = new sqlite.Database(db_path);

// This is to connect to the database
module.exports = db;
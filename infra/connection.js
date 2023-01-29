const path = require('path');
const { Database } = require("sqlite3");
const { PATH_DB } = require("dotenv").config().parsed;
module.exports = new Database(path.resolve() + PATH_DB);